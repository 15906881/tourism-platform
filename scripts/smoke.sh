#!/usr/bin/env bash
set -euo pipefail

echo -e "\n-- HEALTH --"
curl -sS -m 5 http://localhost:3000/health | jq .

echo -e "\n-- DEMO TEMPLATES (first 3) --"
curl -sS -m 5 -H 'X-Tenant: demo' http://localhost:3000/templates | jq '.[0:3]'

echo -e "\n-- ACME landing-basic (merged) --"
curl -sS -m 5 -H 'X-Tenant: acme' http://localhost:3000/templates/landing-basic | jq .

echo -e "\n-- ACME override: PUT heroTitle --"
curl -sS -m 5 -X PUT -H 'Content-Type: application/json' -H 'X-Tenant: acme' \
  http://localhost:3000/tenant-templates \
  -d '{"template_key":"landing-basic","overrides":{"heroTitle":"Hello Again, Acme!"}}' | jq .

echo -e "\n-- ACME landing-basic (should reflect new title) --"
curl -sS -m 5 -H 'X-Tenant: acme' http://localhost:3000/templates/landing-basic | jq .

echo -e "\n-- ACME override: DELETE landing-basic --"
curl -sS -m 5 -X DELETE -H 'X-Tenant: acme' \
  'http://localhost:3000/tenant-templates?template_key=landing-basic' | jq .

echo -e "\n-- ACME landing-basic (should revert to base, no heroTitle) --"
curl -sS -m 5 -H 'X-Tenant: acme' http://localhost:3000/templates/landing-basic | jq .
