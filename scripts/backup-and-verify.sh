#!/bin/bash
# scripts/backup-and-verify.sh

set -e

DB_URL=$1
BACKUP_DIR=./backups
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo 💾 Starting backup...

# Create backup
pg_dump $DB_URL --format=custom --file=$BACKUP_DIR/backup_$TIMESTAMP.dump

# Verify backup
pg_restore --list $BACKUP_DIR/backup_$TIMESTAMP.dump > /dev/null

# Create verification SQL
cat > $BACKUP_DIR/verify_$TIMESTAMP.sql << SQL
SELECT
  schemaname,
  COUNT(*) as table_count
FROM pg_tables
WHERE schemaname IN ('core', 'public')
GROUP BY schemaname;

SELECT
  tablename,
  COUNT(*) as row_count
FROM core.tenants
GROUP BY tablename;
SQL

echo ✅ Backup created: backup_$TIMESTAMP.dump
echo 📊 Verification script: verify_$TIMESTAMP.sql
