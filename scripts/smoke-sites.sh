#!/usr/bin/env bash
set -euo pipefail

echo -e "\n-- HEALTH --"
curl -sS -m 5 http://localhost:3000/health | jq .

echo -e "\n-- Ensure ACME tenant exists --"
curl -sS -X POST http://localhost:3000/tenants \
  -H 'Content-Type: application/json' \
  -d '{"name":"acme"}' | jq .

echo -e "\n-- Create site (idempotent) --"
curl -sS -X POST 'http://localhost:3000/sites?tenant=acme' \
  -H 'Content-Type: application/json' \
  -d '{"key":"acme-main","name":"Acme Main","domain":null}' | jq .

echo -e "\n-- List sites --"
curl -sS -H 'X-Tenant: acme' http://localhost:3000/sites | jq .

echo -e "\n-- Create home page (idempotent) --"
curl -sS -X POST 'http://localhost:3000/sites/acme-main/pages?tenant=acme' \
  -H 'Content-Type: application/json' \
  -d '{"slug":"home","template_key":"landing-basic","overrides":{"heroTitle":"Home — ACME"}, "published":true}' | jq .

echo -e "\n-- List pages --"
curl -sS -H 'X-Tenant: acme' http://localhost:3000/sites/acme-main/pages | jq .

echo -e "\n-- Get merged page --"
curl -sS -H 'X-Tenant: acme' http://localhost:3000/sites/acme-main/pages/home | jq .
