#!/usr/bin/env bash
set -euo pipefail

# 0) Your Neon owner connection (as given)
NEON_OWNER_URL='postgresql://neondb_owner:npg_pd43GcoBWaXb@ep-royal-shape-ad9uw7pm-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

DB=tourism_platform
APP_USER=tp_app
# generate a random app password (20 chars)
APP_PASS=$(LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 20)

echo "==> Smoke test (connect to Neon)"
psql "$NEON_OWNER_URL" -v ON_ERROR_STOP=1 -Atc "select current_user, current_database(), inet_server_addr();"
psql "$NEON_OWNER_URL" -v ON_ERROR_STOP=1 -c "\conninfo"

echo "==> Create database if missing: $DB"
psql "$NEON_OWNER_URL" -v ON_ERROR_STOP=1 -tc "SELECT 1 FROM pg_database WHERE datname='$DB';" | grep -q 1 || \
  psql "$NEON_OWNER_URL" -v ON_ERROR_STOP=1 -c "CREATE DATABASE $DB OWNER neondb_owner;"

echo "==> Create app user (idempotent): $APP_USER"
psql "$NEON_OWNER_URL" -v ON_ERROR_STOP=1 <<SQL
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = '$APP_USER') THEN
    CREATE ROLE $APP_USER LOGIN PASSWORD '$APP_PASS';
  END IF;
END$$;
SQL

OWNER_URL_DB="${NEON_OWNER_URL/neondb?/$DB?}"
APP_URL="postgresql://$APP_USER:$APP_PASS@ep-royal-shape-ad9uw7pm-pooler.c-2.us-east-1.aws.neon.tech/$DB?sslmode=require&channel_binding=require"

echo
echo "==> Paste these into GitHub → Settings → Secrets and variables → Actions"
echo "DATABASE_URL (owner, used for migrations):"
echo "$OWNER_URL_DB"
echo
echo "APP_DB_URL (least-privileged app user):"
echo "$APP_URL"
echo
echo "(You can rotate the owner password in Neon after setting this up.)"
