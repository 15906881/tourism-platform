#!/usr/bin/env bash
set -euo pipefail

echo -e "\n-- HEALTH --"
curl -sS -m 5 http://localhost:3000/health | jq .

echo -e "\n-- DEMO TEMPLATES (first 3) --"
curl -sS -m 5 -H 'X-Tenant: demo' http://localhost:3000/templates | jq '.[0:3]'

echo -e "\n-- ACME landing-basic (merged) --"
curl -sS -m 5 -H 'X-Tenant: acme' http://localhost:3000/templates/landing-basic | jq .
