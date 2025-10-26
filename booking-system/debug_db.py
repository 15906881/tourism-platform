import asyncio
import asyncpg
import os

async def debug_database():
    database_url = os.getenv("DATABASE_URL", "postgresql://sadeshibeshi@localhost:5432/booking_system")
    print(f"Connecting to: {database_url}")
    
    try:
        conn = await asyncpg.connect(database_url)
        print("✅ Connected to database")
        
        # Check current database and schema
        db_info = await conn.fetchrow("SELECT current_database(), current_schema()")
        print(f"Database: {db_info['current_database']}")
        print(f"Schema: {db_info['current_schema']}")
        
        # Check if table exists
        table_exists = await conn.fetchval('''
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = $1 
                AND table_name = 'booking_audit'
            )
        ''', db_info['current_schema'])
        
        print(f"Table 'booking_audit' exists: {table_exists}")
        
        # List all tables
        tables = await conn.fetch('''
            SELECT table_schema, table_name 
            FROM information_schema.tables 
            WHERE table_schema = $1
            ORDER BY table_name
        ''', db_info['current_schema'])
        
        print(f"Tables in schema '{db_info['current_schema']}':")
        for table in tables:
            print(f"  - {table['table_schema']}.{table['table_name']}")
        
        await conn.close()
        
    except Exception as e:
        print(f"❌ Error: {e}")

asyncio.run(debug_database())
