import asyncio
import asyncpg
import os
import json

async def test_audit_logging():
    """Test audit logging directly"""
    database_url = os.getenv("DATABASE_URL", "postgresql://sadeshibeshi@localhost:5432/booking_system")
    
    try:
        # Connect to database
        conn = await asyncpg.connect(database_url)
        print("✅ Connected to database")
        
        # Test inserting an audit record
        test_booking_id = "test_book_123"
        await conn.execute('''
            INSERT INTO booking_audit (booking_id, action, actor, details)
            VALUES ($1, $2, $3, $4)
        ''', test_booking_id, "TEST", "test_script", json.dumps({"test": True}))
        print("✅ Inserted test audit record")
        
        # Test reading audit records
        records = await conn.fetch('SELECT * FROM booking_audit ORDER BY created_at DESC LIMIT 5')
        print(f"✅ Found {len(records)} audit records")
        
        for record in records:
            print(f"  - {record['booking_id']}: {record['action']} by {record['actor']}")
        
        await conn.close()
        
    except Exception as e:
        print(f"❌ Error: {e}")

# Run the test
asyncio.run(test_audit_logging())
