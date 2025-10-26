import re

# Read the current main.py
with open('src/api/main.py', 'r') as f:
    content = f.read()

# Find the problematic line with dict(record['details'])
# Replace it with proper JSON handling
old_pattern = r"'details': dict\(record\['details'\]\) if record\['details'\] else \{\}"
new_code = """'details': json.loads(record['details']) if record['details'] and isinstance(record['details'], str) else (record['details'] if record['details'] else {})"""

content = re.sub(old_pattern, new_code, content)

# Also make sure json is imported
if 'import json' not in content:
    # Add json import after the other imports
    content = content.replace('import hashlib', 'import hashlib\\nimport json')

# Write back
with open('src/api/main.py', 'w') as f:
    f.write(content)

print("✅ Manually fixed audit endpoint")
