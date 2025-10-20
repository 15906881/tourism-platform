#!/bin/bash
set -e

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backups"
DB_NAME="tourism_dev"
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME}_${TIMESTAMP}.sql"

mkdir -p ${BACKUP_DIR}

echo "🔄 Starting backup of ${DB_NAME}..."
pg_dump -U postgres -d ${DB_NAME} -f ${BACKUP_FILE}
gzip ${BACKUP_FILE}

echo "✅ Backup complete: ${BACKUP_FILE}.gz"

# Keep only last 7 days
find ${BACKUP_DIR} -name "*.sql.gz" -mtime +7 -delete
echo "🧹 Cleaned up old backups"
