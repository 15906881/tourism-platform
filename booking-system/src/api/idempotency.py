from typing import Dict, Optional, Tuple
import hashlib
import json

# In-memory store for demo - use Redis or database in production
idempotency_store: Dict[str, dict] = {}

def get_request_hash(payload: dict) -> str:
    """Create a hash of the request payload for comparison"""
    normalized = json.dumps(payload, sort_keys=True, separators=(',', ':'))
    return hashlib.sha256(normalized.encode()).hexdigest()

def check_idempotency(key: str, payload: dict) -> Tuple[Optional[dict], bool]:
    """
    Check if this is a duplicate request
    Returns: (cached_response, is_conflict)
    """
    if key not in idempotency_store:
        return None, False
    
    stored = idempotency_store[key]
    current_hash = get_request_hash(payload)
    
    if stored['request_hash'] == current_hash:
        return stored['response'], False  # Same request - return cached response
    else:
        return None, True  # Different payload with same key - conflict

def store_idempotency(key: str, payload: dict, response: dict):
    """Store the request/response for idempotency"""
    request_hash = get_request_hash(payload)
    idempotency_store[key] = {
        'request_hash': request_hash,
        'response': response
    }
