#!/usr/bin/env bash
echo "🔍 Checking tenant safety in code..."

# Check for direct table access without tenant filtering
echo "Checking bookings table access:"
grep -r "FROM bookings" src/ --include="*.py" || echo "No direct bookings table access found"

echo "Checking services table access:"
grep -r "FROM services" src/ --include="*.py" || echo "No direct services table access found"

echo "✅ Tenant safety check completed"
