import json

with open("emiratesred_products.jsonl", "r", encoding="utf-8") as infile:
    data = [json.loads(line) for line in infile]

with open("emiratesred_products.json", "w", encoding="utf-8") as outfile:
    json.dump(data, outfile, ensure_ascii=False, indent=2)

print("✅ emiratesred_products.json created successfully")
