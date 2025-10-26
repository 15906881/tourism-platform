#!/usr/bin/env python3
import sys
import os

# Add the src directory to Python path
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from src.api.ratelimit_enhanced import generate_rate_limit_bypass

if __name__ == "__main__":
    hmac_header = generate_rate_limit_bypass()
    print(f"X-RateLimit-Bypass: {hmac_header}")
