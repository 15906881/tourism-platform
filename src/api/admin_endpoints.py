from fastapi import APIRouter, Depends, HTTPException, Query
from database import get_db
from admin_auth import verify_admin
from models import Admin

router = APIRouter()

@router.get("/idempotency")
async def get_all_idempotency_records(
    skip: int = 0,
    limit: int = 100,
    admin: Admin = Depends(verify_admin),
    db = Depends(get_db)
):
    """Get all idempotency records with pagination"""
    async with db.acquire() as conn:
        records = await conn.fetch(
            "SELECT idempotency_key, request_hash, booking_id, created_at, expires_at "
            "FROM idempotency_store "
            "ORDER BY created_at DESC "
            "LIMIT $1 OFFSET $2",
            limit, skip
        )
        return [dict(record) for record in records]

@router.get("/idempotency/{key}")
async def get_idempotency_record(
    key: str, 
    admin: Admin = Depends(verify_admin),
    db = Depends(get_db)
):
    """Get specific idempotency record by key"""
    async with db.acquire() as conn:
        record = await conn.fetchrow(
            "SELECT idempotency_key, request_hash, booking_id, created_at, expires_at "
            "FROM idempotency_store "
            "WHERE idempotency_key = $1",
            key
        )
        if not record:
            raise HTTPException(status_code=404, detail="Idempotency record not found")
        return dict(record)

@router.delete("/idempotency/cleanup")
async def cleanup_old_records(
    days_old: int = 30, 
    admin: Admin = Depends(verify_admin),
    db = Depends(get_db)
):
    """Clean up idempotency records older than specified days"""
    async with db.acquire() as conn:
        deleted_count = await conn.fetchval(
            "DELETE FROM idempotency_store WHERE created_at < NOW() - INTERVAL '1 day' * $1 RETURNING COUNT(*)",
            days_old
        )
        return {
            "deleted_count": deleted_count, 
            "message": f"Cleaned up {deleted_count} records older than {days_old} days"
        }

@router.get("/stats")
async def get_idempotency_stats(
    admin: Admin = Depends(verify_admin),
    db = Depends(get_db)
):
    """Get idempotency store statistics"""
    async with db.acquire() as conn:
        stats = await conn.fetchrow("""
            SELECT 
                COUNT(*) as total_records,
                COUNT(DISTINCT idempotency_key) as unique_keys,
                MIN(created_at) as oldest_record,
                MAX(created_at) as newest_record,
                COUNT(*) FILTER (WHERE expires_at < NOW()) as expired_records
            FROM idempotency_store
        """)
        return dict(stats) if stats else {}
