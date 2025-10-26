#!/bin/bash

# RDS Testing Commands
# Fill in your values before running

# =============================================================================
# 0) Set Variables
# =============================================================================
export AWS_REGION=us-east-1
export DB_ID=tourism-platform-dev-postgres
export DB_NAME=<YOUR_DB_NAME>          # e.g., appdb
export DB_SCHEMA=<YOUR_SCHEMA>         # e.g., core or public
export MASTER_USER=<MASTER_USERNAME>   # e.g., postgres or masteruser
export MASTER_PASSWORD=<PASSWORD>      # Add your master password here

# Get DB Host
export DB_HOST=$(aws rds describe-db-instances \
  --region "$AWS_REGION" \
  --db-instance-identifier "$DB_ID" \
  --query 'DBInstances[0].Endpoint.Address' --output text)
echo "DB_HOST: $DB_HOST"

# =============================================================================
# A) Instance & Networking Sanity
# =============================================================================
echo -e "\n=== A) Instance & Networking Sanity ==="
aws rds describe-db-instances \
  --region "$AWS_REGION" \
  --db-instance-identifier "$DB_ID" \
  --query 'DBInstances[0].{VPC:DBSubnetGroup.VpcId,SubnetGroup:DBSubnetGroup.DBSubnetGroupName,PubliclyAccessible:PubliclyAccessible,SGs:VpcSecurityGroups[*].VpcSecurityGroupId}' \
  --output table

# =============================================================================
# B) Status, Version, Backups, Windows, Deletion Protection
# =============================================================================
echo -e "\n=== B) Status, Version, Backups, Windows, Deletion Protection ==="
aws rds describe-db-instances \
  --region "$AWS_REGION" \
  --db-instance-identifier "$DB_ID" \
  --query 'DBInstances[0].{Status:DBInstanceStatus,Engine:Engine,EngineVersion:EngineVersion,BackupRetention:BackupRetentionPeriod,BackupWindow:PreferredBackupWindow,MaintWindow:PreferredMaintenanceWindow,DeletionProtection:DeletionProtection}' \
  --output table

# =============================================================================
# C) Log Exports & Performance Insights
# =============================================================================
echo -e "\n=== C) Log Exports & Performance Insights ==="
aws rds describe-db-instances \
  --region "$AWS_REGION" \
  --db-instance-identifier "$DB_ID" \
  --query 'DBInstances[0].{LogExports:EnabledCloudwatchLogsExports,PI:PerformanceInsightsEnabled}' \
  --output table

# =============================================================================
# D) Secrets Manager Master (Verify; Rotate if Needed)
# =============================================================================
echo -e "\n=== D) Secrets Manager Master ==="
aws rds describe-db-instances \
  --region "$AWS_REGION" \
  --db-instance-identifier "$DB_ID" \
  --query 'DBInstances[0].MasterUserSecret' --output json

# Uncomment to enable Secrets Manager for master password
# aws rds modify-db-instance \
#   --region "$AWS_REGION" \
#   --db-instance-identifier "$DB_ID" \
#   --manage-master-user-password \
#   --apply-immediately

# Uncomment to rotate master password
# aws rds modify-db-instance \
#   --region "$AWS_REGION" \
#   --db-instance-identifier "$DB_ID" \
#   --rotate-master-user-password \
#   --apply-immediately

# =============================================================================
# E) Connectivity Test
# =============================================================================
echo -e "\n=== E) Connectivity Test ==="
PGPASSWORD=$MASTER_PASSWORD psql "host=$DB_HOST port=5432 dbname=$DB_NAME user=$MASTER_USER sslmode=require" -c '\conninfo'

# =============================================================================
# F) Engine & Settings
# =============================================================================
echo -e "\n=== F) Engine & Settings ==="
PGPASSWORD=$MASTER_PASSWORD psql "host=$DB_HOST port=5432 dbname=$DB_NAME user=$MASTER_USER sslmode=require" \
  -c 'SELECT version();' \
  -c 'SHOW server_version;' \
  -c "SELECT extname, extversion FROM pg_extension ORDER BY extname;" \
  -c "SELECT name, setting FROM pg_settings WHERE name IN ('max_connections','shared_buffers','work_mem') ORDER BY name;"

# =============================================================================
# G) Data Sanity: Row Counts
# =============================================================================
echo -e "\n=== G) Data Sanity: Top 25 Tables by Row Count ==="
PGPASSWORD=$MASTER_PASSWORD psql "host=$DB_HOST port=5432 dbname=$DB_NAME user=$MASTER_USER sslmode=require" \
  -c "SELECT schemaname, relname AS table, n_live_tup AS approx_rows FROM pg_stat_user_tables ORDER BY approx_rows DESC LIMIT 25;"

# Edit table names to match your schema
echo -e "\n=== G) Specific Table Counts (Edit table names as needed) ==="
PGPASSWORD=$MASTER_PASSWORD psql "host=$DB_HOST port=5432 dbname=$DB_NAME user=$MASTER_USER sslmode=require" \
  -c "SELECT 'users' AS t, COUNT(*) FROM ${DB_SCHEMA}.users
      UNION ALL
      SELECT 'tenants', COUNT(*) FROM ${DB_SCHEMA}.tenants
      UNION ALL
      SELECT 'orders', COUNT(*) FROM ${DB_SCHEMA}.orders;"

# =============================================================================
# H) RLS & Policies
# =============================================================================
echo -e "\n=== H) Row Level Security Status ==="
PGPASSWORD=$MASTER_PASSWORD psql "host=$DB_HOST port=5432 dbname=$DB_NAME user=$MASTER_USER sslmode=require" \
  -c "SELECT schemaname, tablename, rowsecurity
      FROM pg_tables
      WHERE schemaname NOT IN ('pg_catalog','information_schema')
      ORDER BY rowsecurity DESC, schemaname, tablename;"

echo -e "\n=== H) RLS Policies ==="
PGPASSWORD=$MASTER_PASSWORD psql "host=$DB_HOST port=5432 dbname=$DB_NAME user=$MASTER_USER sslmode=require" \
  -c "SELECT schemaname, tablename, policyname, cmd, roles, qual, with_check
      FROM pg_policies
      ORDER BY schemaname, tablename, policyname;"

# Uncomment and configure for RLS negative test
# export APP_ROLE=<app_tenant_dashboard>
# export APP_ROLE_PASSWORD=<APP_ROLE_PASSWORD>
# echo -e "\n=== H) RLS Negative Test ==="
# PGPASSWORD=$APP_ROLE_PASSWORD psql "host=$DB_HOST port=5432 dbname=$DB_NAME user=$APP_ROLE sslmode=require" \
#   -c "SELECT set_config('app.current_tenant','TENANT_ABC', true);" \
#   -c "SELECT COUNT(*) AS should_be_zero FROM ${DB_SCHEMA}.orders WHERE tenant_id='TENANT_XYZ';"

# =============================================================================
# I) Backups & Deletion Protection
# =============================================================================
echo -e "\n=== I) Backups & Deletion Protection ==="
aws rds describe-db-instances \
  --region "$AWS_REGION" \
  --db-instance-identifier "$DB_ID" \
  --query 'DBInstances[0].{AutomatedBackupsEnabled:BackupRetentionPeriod,DeletionProtection:DeletionProtection}' \
  --output table

# =============================================================================
# J) Security Group Details
# =============================================================================
echo -e "\n=== J) DB Security Group ==="
export RDS_SG_ID=$(aws rds describe-db-instances \
  --region "$AWS_REGION" \
  --db-instance-identifier "$DB_ID" \
  --query 'DBInstances[0].VpcSecurityGroups[0].VpcSecurityGroupId' --output text)
echo "RDS_SG_ID: $RDS_SG_ID"

echo -e "\n=== J) Security Group Inbound Rules ==="
aws ec2 describe-security-groups --region "$AWS_REGION" --group-ids "$RDS_SG_ID" \
  --query 'SecurityGroups[0].IpPermissions' --output json

echo -e "\n=== Testing Complete ==="
