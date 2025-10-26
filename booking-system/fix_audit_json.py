# Script to fix the JSON serialization in audit endpoint
import asyncpg
import os
import json
from datetime import datetime

async def test_audit_json():
    """Test and fix the JSON serialization"""
    database_url = os.getenv("DATABASE_URL", "postgresql://sadeshibeshi@localhost:5432/booking_system")
    
    try:
        conn = await asyncpg.connect(database_url)
        print("✅ Connected to database")
        
        # Fetch records like the endpoint does
        records = await conn.fetch('''
            SELECT booking_id, action, actor, details, created_at
            FROM booking_audit 
            ORDER BY created_at DESC 
            LIMIT 50
        ''')
        
        print(f"Found {len(records)} records")
        
        # Test the current conversion method (that's failing)
        result = []
        for record in records:
            print(f"Record: {record}")
            print(f"Details type: {type(record['details'])}")
            print(f"Details value: {record['details']}")
            
            # This is the problematic line - let's fix it
            try:
                # For asyncpg JSONB fields, we need to handle them properly
                details_value = record['details']
                if details_value and isinstance(details_value, (dict, list)):
                    # Already a Python dict/list
                    serialized_details = details_value
                else:
                    # Try to parse as JSON
                    serialized_details = json.loads(details_value) if details_value else {}
                
                result.append({
                    'booking_id': record['booking_id'],
                    'action': record['action'],
                    'actor': record['actor'],
                    'details': serialized_details,
                    'created_at': record['created_at'].isoformat() if record['created_at'] else None
                })
            except Exception as e:
                print(f"Error processing record: {e}")
                # Fallback: convert to string
                result.append({
                    'booking_id': record['booking_id'],
                    'action': record['action'],
                    'actor': record['actor'],
                    'details': str(record['details']),
                    'created_at': record['created_at'].isoformat() if record['created_at'] else None
                })
        
        print("✅ Successfully converted records to JSON")
        print("Sample result:", json.dumps(result[0] if result else {}, indent=2))
        
        await conn.close()
        return result
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return []

import asyncio
asyncio.run(test_audit_json())
