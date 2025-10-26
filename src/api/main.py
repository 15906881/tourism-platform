from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import os
import asyncpg
app = FastAPI(title='Booking System API')
# Database connection pool
pool = None
class AvailabilityRequest(BaseModel):
    from_date: str
    days: int = 14
class CreateBookingRequest(BaseModel):
    service_id: str
    starts_at: str
    customer_name: str
    customer_email: str
    customer_phone: Optional[str] = None
@app.on_event('startup')
async def startup():
    global pool
    pool = await asyncpg.create_pool(os.getenv('DATABASE_URL'))
@app.get('/')
async def root():
    return {'message': 'Booking System API'}
@app.get('/health')
async def health_check():
    try:
        async with pool.acquire() as conn:
            db_ok = await conn.fetchval('SELECT 1')
            return {
                'status': 'healthy',
                'database': 'connected',
                'tenants': await conn.fetchval('SELECT COUNT(*) FROM tenants'),
                'services': await conn.fetchval('SELECT COUNT(*) FROM services')
            }
    except Exception as e:
        raise HTTPException(status_code=503, detail=f'Database error: {e}')
@app.get('/public/v1/services/{service_id}/availability')
async def get_availability(service_id: str, from_date: str, days: int = 14):
    'Get available time slots for a service'
    async with pool.acquire() as conn:
        service = await conn.fetchrow(
            'SELECT * FROM services WHERE id = $1', service_id
        )
        if not service:
            raise HTTPException(status_code=404, detail='Service not found')
        
        return {'service_id': service_id, 'available_slots': []}
@app.post('/public/v1/bookings')
async def create_booking(booking: CreateBookingRequest):
    'Create a new booking (idempotent)'
    return {'booking_id': 'temp-id', 'status': 'confirmed'}
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)

from fastapi import Header, HTTPException
from .idempotency import check_idempotency, store_idempotency

# Track booked slots (in production, use database)
booked_slots = set()

@app.post("/public/v1/bookings")
async def create_public_booking(
    booking: dict, 
    idempotency_key: Optional[str] = Header(None, alias="Idempotency-Key")
):
    """Create a booking with proper idempotency support"""
    import datetime
    
    # Check for idempotency
    if idempotency_key:
        existing_response = check_idempotency(idempotency_key, booking)
        if existing_response is not None:
            return existing_response  # Return cached response
        # If we get None, it means same key but different payload - conflict
    
    # Check if slot is already booked
    slot_key = f"{booking.get('service_id')}:{booking.get('starts_at')}"
    if slot_key in booked_slots:
        raise HTTPException(status_code=409, detail="Slot already booked")
    
    # Create booking
    booking_id = f"book_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}"
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
    
    # Store for idempotency
    if idempotency_key:
        store_idempotency(idempotency_key, booking, response_data)
    
    return response_data
