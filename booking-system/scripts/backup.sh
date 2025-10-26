#!/usr/bin/env bash
set -euo pipefail

# Configuration - use home directory
BACKUP_DIR="${HOME}/backups/booking-system"
DATABASE_URL="${DATABASE_URL:-postgresql://sadeshibeshi@localhost:5432/booking_system}"
RETENTION_DAYS=14

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Generate timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/booking_${TIMESTAMP}.dump"

echo "Starting backup: $BACKUP_FILE"

# Perform backup
pg_dump --no-owner --format=custom -d "$DATABASE_URL" -f "$BACKUP_FILE"

# Verify backup
if [ -f "$BACKUP_FILE" ] && [ -s "$BACKUP_FILE" ]; then
    echo "✅ Backup completed successfully: $BACKUP_FILE"
    echo "Backup size: $(du -h "$BACKUP_FILE" | cut -f1)"
else
    echo "❌ Backup failed"
    exit 1
fi

# Clean up old backups
echo "Cleaning up backups older than $RETENTION_DAYS days..."
find "$BACKUP_DIR" -name "booking_*.dump" -mtime +$RETENTION_DAYS -delete

echo "✅ Backup process completed"
