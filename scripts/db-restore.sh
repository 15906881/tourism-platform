#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: ./scripts/db-restore.sh <backup-file.sql.gz>"
  echo ""
  echo "Available backups:"
  ls -lh backups/*.sql.gz 2>/dev/null || echo "No backups found"
  exit 1
fi

BACKUP_FILE=$1
DB_NAME="tourism_dev"

echo "⚠️  WARNING: This will DROP and recreate ${DB_NAME}"
read -p "Continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
  echo "Aborted"
  exit 0
fi

echo "🔄 Restoring ${BACKUP_FILE}..."
psql -U postgres -d postgres -c "DROP DATABASE IF EXISTS ${DB_NAME};"
psql -U postgres -d postgres -c "CREATE DATABASE ${DB_NAME} OWNER postgres;"
gunzip -c ${BACKUP_FILE} | psql -U postgres -d ${DB_NAME}

echo "✅ Restore complete!"
