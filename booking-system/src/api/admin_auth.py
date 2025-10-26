import os
import hmac
import hashlib
from fastapi import HTTPException, Header, Request
from typing import Optional

# Simple API key store (in production, use AWS Secrets Manager or database)
ADMIN_API_KEYS = {
    "admin-tenant-1": "secret-key-1",
    "admin-tenant-2": "secret-key-2"
}

async def verify_admin_access(api_key: Optional[str] = Header(None), tenant_id: Optional[str] = Header(None)):
    """Verify admin API access"""
    if not api_key or not tenant_id:
        raise HTTPException(status_code=401, detail="Admin access requires API-Key and Tenant-ID headers")
    
    expected_key = ADMIN_API_KEYS.get(tenant_id)
    if not expected_key or not hmac.compare_digest(api_key, expected_key):
        raise HTTPException(status_code=403, detail="Invalid API key or tenant ID")
    
    return tenant_id

# Audit logging for admin actions
async def log_admin_action(db, action: str, tenant_id: str, details: dict = None):
    """Log admin actions to audit table"""
    try:
        await db.execute('''
            INSERT INTO booking_audit (booking_id, action, actor, details)
            VALUES ($1, $2, $3, $4)
        ''', f"admin_{tenant_id}", action, f"admin:{tenant_id}", {
            "admin_action": True,
            "tenant_id": tenant_id,
            **(details or {})
        })
        print(f"Admin audit logged: {action} by tenant {tenant_id}")
    except Exception as e:
        print(f"Failed to log admin audit: {e}")
