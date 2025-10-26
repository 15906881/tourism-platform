from fastapi import FastAPI, HTTPException, Header, Depends
from datetime import datetime
from typing import Optional
import hashlib
import json
import os
import asyncpg

# Import enhanced services
from .emailer import send_booking_confirmation, send_booking_cancellation, send_booking_reschedule
from .ratelimit import RateLimitMiddleware
from .idempotency_store import check_idempotency, store_idempotency

app = FastAPI(title="Booking System API")

# Add rate limiting middleware
app.add_middleware(RateLimitMiddleware)

# Database dependency
async def get_db():
    database_url = os.getenv("DATABASE_URL", "postgresql://sadeshibeshi@localhost:5432/booking_system")
    conn = await asyncpg.connect(database_url)
    try:
        yield conn
    finally:
        await conn.close()

# Simple in-memory storage for demo slots (replace with DB in production)
booked_slots = set()

async def log_booking_action(db, booking_id: str, action: str, details: dict = None):
    """Simple audit logging function"""
    try:
        await db.execute('''
            INSERT INTO booking_audit (booking_id, action, actor, details)
            VALUES ($1, $2, $3, $4)
        ''', booking_id, action, "public", json.dumps(details or {}))
        print(f"Audit logged: {action} for booking {booking_id}")
    except Exception as e:
        print(f"Failed to log audit: {e}")

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "booking-system"}

@app.get("/")
async def root():
    return {"message": "Booking System API is running"}

# ACCEPTANCE TEST ENDPOINTS
@app.get("/public/v1/services/{service_id}/availability")
async def get_availability(service_id: str, from_date: str, days: int = 7):
    import datetime as dt
    base_date = dt.datetime.strptime(from_date, "%Y-%m-%d").date()
    
    slots = []
    for i in range(min(days, 7)):
        current_date = base_date + dt.timedelta(days=i)
        slots.extend([
            f"{current_date}T09:00:00Z",
            f"{current_date}T10:00:00Z", 
            f"{current_date}T11:00:00Z",
            f"{current_date}T14:00:00Z",
            f"{current_date}T15:00:00Z"
        ])
    
    return {
        "service_id": service_id,
        "from_date": from_date,
        "days": days,
        "available_slots": slots
    }

@app.post("/public/v1/bookings")
async def create_public_booking(
    booking: dict, 
    idempotency_key: Optional[str] = Header(None, alias="Idempotency-Key"),
    db = Depends(get_db)
):
    """Create a booking with PERSISTENT idempotency support"""
    # Check for idempotency using persistent store
    if idempotency_key:
        existing_booking_id, is_conflict = await check_idempotency(idempotency_key, booking)
        if is_conflict:
            raise HTTPException(status_code=409, detail="Idempotency key conflict - different payload")
        if existing_booking_id:
            # Return existing booking
            return {
                "booking_id": existing_booking_id,
                "service_id": booking.get('service_id'),
                "starts_at": booking.get('starts_at'),
                "customer_name": booking.get('customer_name'),
                "customer_email": booking.get('customer_email'),
                "cancel_token": f"cancel_{existing_booking_id}",
                "reschedule_token": f"reschedule_{existing_booking_id}"
            }
    
    # Check if slot is already booked (in-memory for demo - replace with DB check)
    slot_key = f"{booking.get('service_id')}:{booking.get('starts_at')}"
    if slot_key in booked_slots:
        raise HTTPException(status_code=409, detail="Slot already booked")
    
    # Create booking
    booking_id = f"book_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    response_data = {
        "booking_id": booking_id,
        "service_id": booking.get('service_id'),
        "starts_at": booking.get('starts_at'),
        "customer_name": booking.get('customer_name'),
        "customer_email": booking.get('customer_email'),
        "cancel_token": f"cancel_{booking_id}",
        "reschedule_token": f"reschedule_{booking_id}"
    }
    
    # Mark slot as booked
    booked_slots.add(slot_key)
    
    # Store for persistent idempotency
    if idempotency_key:
        await store_idempotency(idempotency_key, booking, booking_id)
        print(f"Stored idempotency: {idempotency_key} -> {booking_id}")
    
    # Log audit action
    await log_booking_action(
        db,
        booking_id,
        "CREATED",
        {
            "service_id": booking.get('service_id'),
            "starts_at": booking.get('starts_at'),
            "customer_email": booking.get('customer_email'),
            "idempotency_key": idempotency_key
        }
    )
    
    # Send confirmation email (with retry logic)
    email_data = {
        'customer_name': booking.get('customer_name'),
        'customer_email': booking.get('customer_email'),
        'booking_id': booking_id,
        'starts_at': booking.get('starts_at'),
        'service_name': 'Massage Therapy',
        'cancel_token': f"cancel_{booking_id}",
        'reschedule_token': f"reschedule_{booking_id}"
    }
    send_booking_confirmation(email_data)
    
    return response_data

# Include other endpoints...
@app.post("/public/v1/bookings/{booking_id}/reschedule")
async def reschedule_public_booking(booking_id: str, reschedule_data: dict, db = Depends(get_db)):
    new_starts_at = reschedule_data.get('new_starts_at')
    response_data = {"booking_id": booking_id, "new_starts_at": new_starts_at, "status": "rescheduled"}
    await log_booking_action(db, booking_id, "RESCHEDULED", {"new_starts_at": new_starts_at})
    # Send email...
    return response_data

@app.post("/public/v1/bookings/{booking_id}/cancel")
async def cancel_public_booking(booking_id: str, cancel_data: dict, db = Depends(get_db)):
    response_data = {"booking_id": booking_id, "status": "cancelled"}
    await log_booking_action(db, booking_id, "CANCELLED", {"reason": "user_request"})
    # Send email...
    return response_data

@app.get("/admin/audit")
async def get_audit_logs(db = Depends(get_db)):
    try:
        records = await db.fetch('SELECT booking_id, action, actor, details, created_at FROM booking_audit ORDER BY created_at DESC LIMIT 50')
        result = []
        for record in records:
            details_value = record['details']
            if isinstance(details_value, str):
                try: parsed_details = json.loads(details_value)
                except: parsed_details = {"raw": details_value}
            else: parsed_details = details_value or {}
            result.append({'booking_id': record['booking_id'], 'action': record['action'], 'actor': record['actor'], 'details': parsed_details, 'created_at': record['created_at'].isoformat() if record['created_at'] else None})
        return result
    except Exception as e:
        return {"error": f"Failed to fetch audit logs: {str(e)}"}
