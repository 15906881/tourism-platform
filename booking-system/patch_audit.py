# Script to patch the audit endpoint in main.py
import re

with open('src/api/main.py', 'r') as f:
    content = f.read()

# Find and replace the audit endpoint
old_audit_endpoint = '''@app.get("/admin/audit")
async def get_audit_logs(db = Depends(get_db)):
    """Get recent audit logs - FIXED VERSION"""
    try:
        records = await db.fetch('''
            SELECT booking_id, action, actor, details, created_at
            FROM booking_audit 
            ORDER BY created_at DESC 
            LIMIT 50
        ''')
        
        # Convert to JSON-serializable format
        result = []
        for record in records:
            result.append({
                'booking_id': record['booking_id'],
                'action': record['action'],
                'actor': record['actor'],
                'details': dict(record['details']) if record['details'] else {},
                'created_at': record['created_at'].isoformat() if record['created_at'] else None
            })
        return result
        
    except Exception as e:
        return {"error": f"Failed to fetch audit logs: {str(e)}"}'''

new_audit_endpoint = '''@app.get("/admin/audit")
async def get_audit_logs(db = Depends(get_db)):
    """Get recent audit logs - FIXED VERSION"""
    try:
        records = await db.fetch('''
            SELECT booking_id, action, actor, details, created_at
            FROM booking_audit 
            ORDER BY created_at DESC 
            LIMIT 50
        ''')
        
        # Convert to JSON-serializable format with proper JSONB handling
        result = []
        for record in records:
            # Handle JSONB details field properly
            details_value = record['details']
            if details_value and isinstance(details_value, (dict, list)):
                # Already a Python dict/list from asyncpg
                serialized_details = details_value
            else:
                # Try to parse as JSON, fallback to string
                try:
                    serialized_details = json.loads(details_value) if details_value else {}
                except:
                    serialized_details = str(details_value) if details_value else {}
            
            result.append({
                'booking_id': record['booking_id'],
                'action': record['action'],
                'actor': record['actor'],
                'details': serialized_details,
                'created_at': record['created_at'].isoformat() if record['created_at'] else None
            })
        return result
        
    except Exception as e:
        return {"error": f"Failed to fetch audit logs: {str(e)}"}'''

# Replace the content
content = content.replace(old_audit_endpoint, new_audit_endpoint)

# Write back
with open('src/api/main.py', 'w') as f:
    f.write(content)

print("✅ Patched audit endpoint in main.py")
