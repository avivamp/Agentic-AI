import json, re, time, urllib3
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
import requests_cache
from tqdm import tqdm

# ----------------------------------------------------------------------
# CONFIGURATION
# ----------------------------------------------------------------------
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE = "https://www.emiratesred.com"
MASTER_URL = f"{BASE}/en-GB/retailer/uae-erp/products"
HEADERS = {"User-Agent": "EmiratesRED-Scraper/2.2 (contact: your_email@example.com)"}

RATE_LIMIT = 1.5  # seconds between requests
requests_cache.install_cache("emiratesred_cache", expire_after=86400)

# ----------------------------------------------------------------------
# HELPERS
# ----------------------------------------------------------------------
def slugify(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")

def get_soup(url: str):
    """Fetch and parse HTML with retries and SSL ignore"""
    for _ in range(3):
        try:
            r = requests.get(url, headers=HEADERS, timeout=25, verify=False)
            r.raise_for_status()
            return BeautifulSoup(r.text, "html.parser")
        except Exception as e:
            print(f"[WARN] Retry {url} due to {e}")
            time.sleep(3)
    return None

# ----------------------------------------------------------------------
# PAGE PARSERS
# ----------------------------------------------------------------------
def extract_products_from_listing(url):
    """Extract all product links from a listing page and detect next page robustly"""
    soup = get_soup(url)
    if not soup:
        return [], None

    products = []
    for a in soup.select("a[href*='/product/']"):
        href = a.get("href")
        if href:
            full_url = urljoin(BASE, href)
            name = a.get_text(" ", strip=True)
            products.append({"name": name, "url": full_url})

    # --- FIXED PAGINATION DETECTION ---
    next_page = None
    next_link = soup.find("a", string=re.compile("Next|›|»", re.I))
    if not next_link:
        # Look for numbered pagination links
        page_links = [
            urljoin(BASE, a["href"])
            for a in soup.select("a[href*='?page=']")
            if a.get("href")
        ]
        if page_links:
            current_page_match = re.search(r"[?&]page=(\d+)", url)
            current_page = int(current_page_match.group(1)) if current_page_match else 1
            next_candidates = []
            for link in page_links:
                m = re.search(r"[?&]page=(\d+)", link)
                if m and int(m.group(1)) > current_page:
                    next_candidates.append((int(m.group(1)), link))
            if next_candidates:
                next_candidates.sort()
                next_page = next_candidates[0][1]
    elif next_link.get("href"):
        next_page = urljoin(BASE, next_link["href"])

    return products, next_page


def extract_product_details(url):
    """Scrape all details for one product page"""
    soup = get_soup(url)
    if not soup:
        return {}

    # --- Name ---
    name_tag = soup.find("h1")
    name = name_tag.get_text(strip=True) if name_tag else None

    # --- Brand ---
    brand = None
    brand_tag = soup.select_one("a[href*='/brand/']")
    if brand_tag:
        brand = brand_tag.get_text(strip=True)

    # --- Price ---
    text = soup.get_text(" ", strip=True)
    price, currency = None, None
    m = re.search(r"\$([0-9]+(?:\.[0-9]{1,2})?)", text)
    if m:
        price = float(m.group(1))
        currency = "USD"

    # --- Description ---
    description = None

    # ✅ Primary: React richtext component
    desc_block = soup.find(attrs={"data-testid": "productDescriptionRichtext"})
    if desc_block and desc_block.get_text(strip=True):
        description = desc_block.get_text(" ", strip=True)
    else:
        # Secondary selectors
        selectors = [
            ".product-description",
            ".description",
            "#tab-description",
            "section.description",
            "div#description",
        ]
        for sel in selectors:
            node = soup.select_one(sel)
            if node and node.get_text(strip=True):
                description = node.get_text(" ", strip=True)
                break

        # Fallback: longest <p> tag
        if not description:
            paragraphs = [
                p.get_text(" ", strip=True)
                for p in soup.find_all("p")
                if len(p.get_text(strip=True)) > 50
            ]
            if paragraphs:
                description = max(paragraphs, key=len)

    # --- Images ---
    images = []
    for img in soup.select("img"):
        src = img.get("src") or img.get("data-src")
        if not src:
            continue
        src = src.strip()
        if src.startswith("/"):
            src = urljoin(BASE, src)
        if src.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            images.append(src)
    images = list(dict.fromkeys(images))  # dedupe

    # --- Categories from breadcrumbs ---
    categories = []
    for crumb in soup.select("nav a, ul.breadcrumb a"):
        if "/category/" in crumb.get("href", ""):
            categories.append(crumb.get_text(strip=True))
    categories = list(dict.fromkeys(categories))

    return {
        "name": name,
        "brand": brand,
        "price": price,
        "currency": currency,
        "description": description,
        "images": images,
        "categories": categories,
    }

# ----------------------------------------------------------------------
# MAIN SCRAPER
# ----------------------------------------------------------------------
def main():
    print(f"[START] Crawling EmiratesRED master listing: {MASTER_URL}")
    page = MASTER_URL
    seen = set()
    total_products = 0
    page_num = 1

    with open("emiratesred_products.jsonl", "w", encoding="utf-8") as f:
        while page:
            print(f"\n[PAGE {page_num}] {page}")
            items, next_page = extract_products_from_listing(page)
            print(f"  → Found {len(items)} products on this page")

            for item in tqdm(items, desc=f"Scraping Page {page_num}", leave=False):
                pid = slugify(item["url"])
                if pid in seen:
                    continue
                seen.add(pid)
                details = extract_product_details(item["url"])
                total_products += 1

                record = {
                    "id": pid,
                    "name": details.get("name") or item["name"],
                    "brand": details.get("brand"),
                    "categories": details.get("categories"),
                    "price": details.get("price"),
                    "currency": details.get("currency"),
                    "description": details.get("description"),
                    "short_description": "",
                    "images": details.get("images"),
                    "product_url": item["url"],
                    "source_url": page,
                    "retailer": "",
                    "text_to_embed": "",
                }

                f.write(json.dumps(record, ensure_ascii=False) + "\n")
                time.sleep(RATE_LIMIT)

            page = next_page
            page_num += 1
            if page:
                time.sleep(RATE_LIMIT)

    print(f"\n✅ Completed: {total_products} total products scraped.")
    print("✅ Saved emiratesred_products.jsonl")

    # Convert to JSON array
    with open("emiratesred_products.jsonl", "r", encoding="utf-8") as infile:
        data = [json.loads(line) for line in infile]
    with open("emiratesred_products.json", "w", encoding="utf-8") as outfile:
        json.dump(data, outfile, ensure_ascii=False, indent=2)

    print("✅ Also saved emiratesred_products.json (array format)")

# ----------------------------------------------------------------------
if __name__ == "__main__":
    main()
