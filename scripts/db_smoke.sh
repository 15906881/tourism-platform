#!/usr/bin/env bash
set -euo pipefail

APP_DB_URL="${APP_DB_URL:-postgresql://tp_user:tp_password@postgres.0.0.1.0.0.1:5432/postgres}"

echo "Running RLS smoke test against ${APP_DB_URL}"
# demo tenant should exist from seeds
psql "$APP_DB_URL" -v ON_ERROR_STOP=1 -c \
  "SELECT set_config('app.tenant_id',(SELECT id::text FROM core.tenants WHERE name='demo'),false);"

count_demo=$(psql "$APP_DB_URL" -qAt -v ON_ERROR_STOP=1 -c \
  "SELECT COUNT(*) FROM core.users WHERE email='demo@local.test';")
test "$count_demo" = "1" || { echo "Expected 1 demo user, got $count_demo"; exit 1; }

psql "$APP_DB_URL" -v ON_ERROR_STOP=1 -c \
  "SELECT set_config('app.tenant_id','00000000-0000-0000-0000-000000000000',false);"

count_bogus=$(psql "$APP_DB_URL" -qAt -v ON_ERROR_STOP=1 -c \
  "SELECT COUNT(*) FROM core.users;")
test "$count_bogus" = "0" || { echo "Expected 0 users with bogus tenant, got $count_bogus"; exit 1; }

psql "$APP_DB_URL" -v ON_ERROR_STOP=1 -c "RESET app.tenant_id;"
echo "RLS smoke test OK"
