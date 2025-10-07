from fastapi import FastAPI
from app.logging_config import setup_logging

# Setup logging before anything else
setup_logging()

from fastapi.middleware.cors import CORSMiddleware
from app.middleware.logging import LoggingMiddleware
from .routers import search, agentic_search, metrics  # import after logging is set

app = FastAPI(title="Agentic AI Search API", version="0.1.0")
app.add_middleware(LoggingMiddleware)

# list every domain that can host your merchants
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
    """
    Dynamically mirrors the request Origin header for known domains.
    This ensures merchants using custom frontends (Lovable, Aeroshop SDKs, etc.)
    always get a valid CORS response, without manual updates.
    """
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
# Explicit OPTIONS handler
# ----------------------------------------------------------
@app.options("/{rest_of_path:path}")
async def options_handler(request: Request, rest_of_path: str):
    """
    Handles all preflight (OPTIONS) CORS requests explicitly.
    Equivalent to:
        if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
    """
    origin = request.headers.get("origin")
    headers = {
        "Access-Control-Allow-Origin": origin or "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Credentials": "true",
    }
    return JSONResponse(status_code=200, content=None, headers=headers)



# Routers
app.include_router(search.router)
app.include_router(agentic_search.router)
app.include_router(metrics.router)


@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.get("/health")
def health():
    return {"status": "ok"}
