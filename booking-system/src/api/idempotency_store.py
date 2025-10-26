import asyncpg
import os
import hashlib
import json
from datetime import datetime, timedelta

async def get_idempotency_store():
    """Get database connection for idempotency store"""
    database_url = os.getenv("DATABASE_URL", "postgresql://sadeshibeshi@localhost:5432/booking_system")
    return await asyncpg.connect(database_url)

def get_request_hash(payload: dict) -> str:
    """Create a deterministic hash of the request payload"""
    normalized = json.dumps(payload, sort_keys=True, separators=(',', ':'))
    return hashlib.sha256(normalized.encode()).hexdigest()

async def check_idempotency(idempotency_key: str, payload: dict) -> tuple:
    """
    Check idempotency and return (booking_id, is_conflict)
    Returns: (booking_id, False) if same request
             (None, True) if conflict (different payload)
             (None, False) if new request
    """
    db = await get_idempotency_store()
    try:
        # Clean up expired keys first
        await db.execute("SELECT cleanup_expired_idempotency()")
        
        # Check if key exists
        record = await db.fetchrow(
            "SELECT request_hash, booking_id FROM idempotency_store WHERE idempotency_key = $1",
            idempotency_key
        )
        
        if not record:
            return None, False  # New request
            
        current_hash = get_request_hash(payload)
        if record['request_hash'] == current_hash:
            return record['booking_id'], False  # Same request
        else:
            return None, True  # Conflict - different payload
            
    finally:
        await db.close()

async def store_idempotency(idempotency_key: str, payload: dict, booking_id: str):
    """Store idempotency key with 24-hour TTL"""
    db = await get_idempotency_store()
    try:
        request_hash = get_request_hash(payload)
        expires_at = datetime.now() + timedelta(hours=24)
        
        await db.execute('''
            INSERT INTO idempotency_store (idempotency_key, request_hash, booking_id, expires_at)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (idempotency_key) 
            DO UPDATE SET request_hash = $2, booking_id = $3, expires_at = $4
        ''', idempotency_key, request_hash, booking_id, expires_at)
        
    finally:
        await db.close()
