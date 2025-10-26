import os
import time
import hmac
import hashlib
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
from starlette.requests import Request
import redis.asyncio as redis

WINDOW = int(os.getenv("RATE_LIMIT_WINDOW_SEC", "60"))
MAXREQ = int(os.getenv("RATE_LIMIT_MAX_REQUESTS", "10"))
HMAC_SECRET = os.getenv("RATE_LIMIT_HMAC_SECRET", "test-secret-change-in-production")

class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app):
        super().__init__(app)

    async def dispatch(self, request: Request, call_next):
        # Only rate limit booking creation endpoints
        if request.url.path == "/public/v1/bookings" and request.method == "POST":
            # Get client IP
            if request.client:
                ip = request.client.host
            else:
                ip = "unknown"
            
            # Check for HMAC bypass (for acceptance tests)
            hmac_header = request.headers.get("X-RateLimit-Bypass")
            if hmac_header and self._verify_hmac(hmac_header):
                print(f"Rate limit bypass granted for {ip}")
                return await call_next(request)
            
            # Create rate limit key
            current_window = int(time.time() // WINDOW)
            key = f"rl:{ip}:{current_window}"
            
            try:
                # Connect to Redis
                redis_client = redis.from_url(os.getenv("REDIS_URL", "redis://localhost:6379/0"))
                
                # Increment counter
                async with redis_client.pipeline() as pipe:
                    pipe.incr(key)
                    pipe.expire(key, WINDOW)
                    results = await pipe.execute()
                    
                count = results[0]
                
                # Check rate limit
                if count > MAXREQ:
                    return JSONResponse(
                        {"detail": "Rate limit exceeded", "retry_after": WINDOW}, 
                        status_code=429,
                        headers={"Retry-After": str(WINDOW)}
                    )
                    
            except Exception as e:
                # If Redis fails, log but allow the request
                print(f"Rate limit error: {e}. Allowing request.")
                pass
                
        return await call_next(request)
    
    def _verify_hmac(self, hmac_header: str) -> bool:
        """Verify HMAC signature for rate limit bypass"""
        try:
            timestamp, signature = hmac_header.split(":", 1)
            # Allow 30-second window for timestamp
            if abs(time.time() - float(timestamp)) > 30:
                return False
            
            expected_signature = hmac.new(
                HMAC_SECRET.encode(),
                timestamp.encode(),
                hashlib.sha256
            ).hexdigest()
            
            return hmac.compare_digest(signature, expected_signature)
        except:
            return False

# HMAC generator for acceptance tests
def generate_rate_limit_bypass() -> str:
    """Generate HMAC for rate limit bypass (for testing)"""
    timestamp = str(time.time())
    signature = hmac.new(
        HMAC_SECRET.encode(),
        timestamp.encode(),
        hashlib.sha256
    ).hexdigest()
    return f"{timestamp}:{signature}"
