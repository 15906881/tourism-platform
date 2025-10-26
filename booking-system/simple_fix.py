# Simple fix for the audit endpoint
with open('src/api/main.py', 'r') as f:
    content = f.read()

# Replace the problematic dict() conversion
content = content.replace(
    "dict(record['details']) if record['details'] else {}", 
    "json.loads(record['details']) if record['details'] and isinstance(record['details'], str) else (record['details'] if record['details'] else {})"
)

# Ensure json is imported
if 'import json' not in content:
    content = content.replace('import hashlib', 'import hashlib\nimport json')

with open('src/api/main.py', 'w') as f:
    f.write(content)

print("✅ Fixed audit endpoint")
