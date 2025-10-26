#!/bin/bash
echo "=== SECURITY HEADERS TEST ==="
for app in "admin" "site-renderer" "tenant-dashboard"; do
  echo "Testing $app..."
  # Replace with actual URLs once deployed
  echo "URL: https://$app.yourdomain.com/"
  echo "Run: curl -sI https://$app.yourdomain.com/ | grep -E 'Strict-Transport-Security|X-Content-Type-Options|X-Frame-Options|Referrer-Policy|Permissions-Policy|Content-Security-Policy'"
  echo
done
