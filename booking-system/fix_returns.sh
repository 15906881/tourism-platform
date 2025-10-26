#!/bin/bash
python3 << 'PYTHON'
with open('src/api/main.py', 'r') as f:
    content = f.read()

# Fix first return (idempotency path)
content = content.replace(
    "return {'booking_id': str(existing['id']), 'status': existing['status']}",
    """return {
                    'booking_id': str(existing['id']), 
                    'status': existing['status'],
                    'cancel_token': existing['cancel_token'],
                    'reschedule_token': existing['reschedule_token']
                }"""
)

# Fix second return (new booking)
content = content.replace(
    "return {'booking_id': new_id, 'status': 'CONFIRMED'}",
    """return {
                'booking_id': new_id, 
                'status': 'CONFIRMED',
                'cancel_token': cancel_token,
                'reschedule_token': resched_token
            }"""
)

with open('src/api/main.py', 'w') as f:
    f.write(content)
    
print("✅ Fixed return statements!")
PYTHON
