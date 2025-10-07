import subprocess
import os
import json
from datetime import datetime

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UI_DIR = os.path.join(ROOT_DIR, "ui")
BACKEND_DIR = os.path.join(ROOT_DIR, "backend")
DIST_DIR = os.path.join(ROOT_DIR, "dist")

def run(cmd, cwd=None):
    print(f"🚀 Running: {' '.join(cmd)}")
    subprocess.run(cmd, cwd=cwd, check=True)

def build_ui():
    print("🧱 Building Agentic Chat Companion UI...")
    run(["npm", "install"], cwd=UI_DIR)
    run(["npm", "run", "build"], cwd=UI_DIR)
    build_path = os.path.join(UI_DIR, "dist")
    os.makedirs(DIST_DIR, exist_ok=True)
    for file in os.listdir(build_path):
        src = os.path.join(build_path, file)
        dst = os.path.join(DIST_DIR, file)
        print(f"📦 Copying {file} → dist/")
        with open(src, "rb") as fsrc, open(dst, "wb") as fdst:
            fdst.write(fsrc.read())

def build_backend():
    print("⚙️ Packaging backend...")
    run(["pip", "install", "-r", "requirements.txt"], cwd=BACKEND_DIR)
    version_file = os.path.join(DIST_DIR, "backend_version.txt")
    with open(version_file, "w") as f:
        f.write(f"Backend built: {datetime.now().isoformat()}\n")

def create_manifest():
    print("🗂️ Creating SDK manifest...")
    manifest = {
        "name": "Agentic AI SDK",
        "version": datetime.now().strftime("%Y.%m.%d.%H%M"),
        "build_time": datetime.now().isoformat(),
        "frontend": [f for f in os.listdir(DIST_DIR) if f.endswith(".js")],
        "backend": "FastAPI Service"
    }
    with open(os.path.join(DIST_DIR, "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=2)

def main():
    print("==== 🧠 Building Agentic-AI SDK (backend + UI) ====")
    build_ui()
    build_backend()
    create_manifest()
    print("\n✅ Build completed. Artifacts in /dist folder.")

if __name__ == "__main__":
    main()
