import json, re, time, sys, urllib3
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
import requests_cache
from tqdm import tqdm

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

BASE = "https://www.emiratesred.com"
HEADERS = {"User-Agent": "EmiratesRED-Scraper/1.0"}
RATE_LIMIT = 1.5
requests_cache.install_cache("emiratesred_cache", expire_after=86400)

CATEGORY_URLS = [
    f"{BASE}/en-GB/retailer/uae-erp/products",
    f"{BASE}/en-GB/category/uae_online_beauty/beauty",
    f"{BASE}/en-GB/category/uae_online_jewellery/jewellery",
    f"{BASE}/en-GB/category/uae_online_watches/watches",
    f"{BASE}/en-GB/category/uae_online_travelandaccessories/travel-and-accessories",
    f"{BASE}/en-GB/category/uae_online_tech/tech",
    f"{BASE}/en-GB/brand/emirates",
]

def slugify(s): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")

def get_soup(url):
    for _ in range(3):
        try:
            r = requests.get(url, headers=HEADERS, timeout=20, verify=False)
            r.raise_for_status()
            return BeautifulSoup(r.text, "html.parser")
        except Exception as e:
            print(f"[WARN] Retry {url} due to {e}")
            time.sleep(3)
    return None

def extract_products_from_listing(url):
    soup = get_soup(url)
    if not soup:
        return [], None
    products = []
    for a in soup.select("a[href*='/product/']"):
        href = a.get("href")
        if href:
            products.append({"name": a.get_text(' ', strip=True),
                             "url": urljoin(BASE, href)})
    next_url = None
    next_link = soup.find("a", string=re.compile("Next|›|»", re.I))
    if next_link and next_link.get("href"):
        next_url = urljoin(BASE, next_link["href"])
    return products, next_url

def extract_product_details(url):
    soup = get_soup(url)
    if not soup:
        return {}
    name = (soup.find("h1").get_text(strip=True)
            if soup.find("h1") else None)
    brand = (soup.select("a[href*='/brand/']")[-1].get_text(strip=True)
             if soup.select("a[href*='/brand/']") else None)
    text = soup.get_text(" ", strip=True)
    m = re.search(r"\$([0-9]+(?:\.[0-9]{1,2})?)", text)
    price, currency = (float(m.group(1)), "USD") if m else (None, None)
    desc = None
    desc_block = soup.find(attrs={"class": re.compile("(product-description|description)", re.I)})
    if desc_block:
        desc = desc_block.get_text(" ", strip=True)
    images = []
    for img in soup.select("img"):
        src = img.get("src") or img.get("data-src")
        if src and src.startswith("/"):
            src = urljoin(BASE, src)
        if src and any(src.lower().endswith(ext) for ext in [".jpg", ".jpeg", ".png", ".webp"]):
            images.append(src)
    return {"name": name, "brand": brand, "price": price,
            "currency": currency, "description": desc,
            "images": list(dict.fromkeys(images))}

def main():
    seen = set()
    with open("emiratesred_products.jsonl", "w", encoding="utf-8") as f:
        for start_url in CATEGORY_URLS:
            page = start_url
            while page:
                print("[PAGE]", page)
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
                        "price": detail.get("price"),
                        "currency": detail.get("currency"),
                        "description": detail.get("description"),
                        "images": detail.get("images"),
                        "product_url": item["url"],
                        "source_url": page,
                        "retailer": "EmiratesRED",
                        "text_to_embed": " ".join(filter(None, [
                            detail.get("name"),
                            detail.get("brand"),
                            detail.get("description"),
                        ])),
                    }
                    f.write(json.dumps(record, ensure_ascii=False) + "\n")
                    time.sleep(RATE_LIMIT)
                page = next_page
                if page:
                    time.sleep(RATE_LIMIT)
    print("✅ Completed: emiratesred_products.jsonl")

if __name__ == "__main__":
    main()
