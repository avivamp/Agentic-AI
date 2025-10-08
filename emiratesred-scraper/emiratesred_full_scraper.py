import json, re, time, sys, urllib3
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
import requests_cache
from tqdm import tqdm

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE = "https://www.emiratesred.com"
HEADERS = {"User-Agent": "EmiratesRED-Scraper/2.0"}
RATE_LIMIT = 1.5
requests_cache.install_cache("emiratesred_cache", expire_after=86400)

MASTER_URL = f"{BASE}/en-GB/retailer/uae-erp/products"

def get_soup(url):
    """Fetch HTML with retries, caching and SSL ignore."""
    for _ in range(3):
        try:
            r = requests.get(url, headers=HEADERS, timeout=20, verify=False)
            r.raise_for_status()
            return BeautifulSoup(r.text, "html.parser")
        except Exception as e:
            print(f"[WARN] Retry {url} due to {e}")
            time.sleep(3)
    return None

def slugify(s): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")

def extract_products_from_listing(url):
    """Get all product links from a listing page"""
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

    # Find next page link
    next_page = None
    next_link = soup.find("a", string=re.compile("Next|›|»", re.I))
    if next_link and next_link.get("href"):
        next_page = urljoin(BASE, next_link["href"])

    return products, next_page

def extract_product_details(url):
    """Scrape details from individual product page"""
    soup = get_soup(url)
    if not soup:
        return {}

    # Name
    name = soup.find("h1")
    name = name.get_text(strip=True) if name else None

    # Brand
    brand = None
    brand_tag = soup.select("a[href*='/brand/']")
    if brand_tag:
        brand = brand_tag[-1].get_text(strip=True)

    # Price
    text = soup.get_text(" ", strip=True)
    price, currency = None, None
    m = re.search(r"\$([0-9]+(?:\.[0-9]{1,2})?)", text)
    if m:
        price = float(m.group(1))
        currency = "USD"

    # Description
    desc_block = soup.find(attrs={"class": re.compile("(product-description|description)", re.I)})
    description = desc_block.get_text(" ", strip=True) if desc_block else None

    # Images
    images = []
    for img in soup.select("img"):
        src = img.get("src") or img.get("data-src")
        if src:
            src = src.strip()
            if src.startswith("/"):
                src = urljoin(BASE, src)
            if src.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                images.append(src)
    images = list(dict.fromkeys(images))

    # Breadcrumb categories
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

def main():
    print(f"[START] Crawling from master listing: {MASTER_URL}")
    page = MASTER_URL
    seen = set()

    with open("emiratesred_products.jsonl", "w", encoding="utf-8") as f:
        while page:
            print(f"[PAGE] {page}")
            items, next_page = extract_products_from_listing(page)
            for item in tqdm(items, desc="Products", leave=False):
                pid = slugify(item["url"])
                if pid in seen:
                    continue
                seen.add(pid)
                detail = extract_product_details(item["url"])
                record = {
                    "id": pid,
                    "name": detail.get("name") or item["name"],
                    "brand": detail.get("brand"),
                    "categories": detail.get("categories"),
                    "price": detail.get("price"),
                    "currency": detail.get("currency"),
                    "description": detail.get("description"),
                    "images": detail.get("images"),
                    "product_url": item["url"],
                    "source_url": page,
                    "retailer": "EmiratesRED",
                    "text_to_embed": " ".join(
                        filter(None, [detail.get("name"), detail.get("brand"), detail.get("description")])
                    ),
                }
                f.write(json.dumps(record, ensure_ascii=False) + "\n")
                time.sleep(RATE_LIMIT)
            page = next_page
            if page:
                time.sleep(RATE_LIMIT)

    print("✅ Completed: emiratesred_products.jsonl")

if __name__ == "__main__":
    main()
