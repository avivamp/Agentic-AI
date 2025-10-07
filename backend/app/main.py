from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from app.logging_config import setup_logging
from app.middleware.logging import LoggingMiddleware
from .routers import search, agentic_search, metrics

setup_logging()

app = FastAPI(title="Agentic AI Search API", version="0.1.0")
app.add_middleware(LoggingMiddleware)

ALLOWED_DOMAIN_SUFFIXES = [
    ".lovable.app",
    ".onrender.com",
    ".aeroshop.ai",
    ".github.io",
    "localhost",
    "127.0.0.1",
]

@app.middleware("http")
async def dynamic_cors_middleware(request: Request, call_next):
    origin = request.headers.get("origin")
    response = await call_next(request)
    if origin and any(suffix in origin for suffix in ALLOWED_DOMAIN_SUFFIXES):
        response.headers["Access-Control-Allow-Origin"] = origin
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = (
            "Content-Type, Authorization, X-Client-Info, ApiKey"
        )
        response.headers["Access-Control-Allow-Credentials"] = "true"
    return response

# ----------------------------------------------------------
# Routers
# ----------------------------------------------------------
app.include_router(search.router)
app.include_router(agentic_search.router)
app.include_router(metrics.router)

# ----------------------------------------------------------
# Universal OPTIONS handler (registered *after* routers)
# ----------------------------------------------------------
async def global_options_handler(request: Request):
    origin = request.headers.get("origin")
    headers = {
        "Access-Control-Allow-Origin": origin or "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Credentials": "true",
    }
    return JSONResponse(status_code=200, content=None, headers=headers)

# Register globally so all OPTIONS paths are caught
app.add_api_route("/{rest_of_path:path}", global_options_handler, methods=["OPTIONS"])

# ----------------------------------------------------------
# Health endpoints
# ----------------------------------------------------------
@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.get("/health")
def health():
    return {"status": "ok"}
