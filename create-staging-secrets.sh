#!/bin/bash
echo '=== CREATING STAGING AWS SECRETS ==='

# Staging database connection string (you'll need to update this)
STAGING_DB_URL="postgresql://staging-user:password@staging-db.region.rds.amazonaws.com:5432/tourism_platform_staging"

# Create staging secrets
echo "Creating tourism-platform/staging/app-db-url..."
aws secretsmanager create-secret \
    --name "tourism-platform/staging/app-db-url" \
    --description "Staging database connection string" \
    --secret-string "$STAGING_DB_URL" \
    --tags "Key=Project,Value=tourism-platform" "Key=Environment,Value=staging" "Key=ManagedBy,Value=manual" \
    --region us-east-1

echo "Creating tourism-platform/staging/postgres-app-user..."
aws secretsmanager create-secret \
    --name "tourism-platform/staging/postgres-app-user" \
    --description "Staging PostgreSQL application user credentials" \
    --secret-string '{"username":"staging_app_user","password":"change_this_password"}' \
    --tags "Key=Project,Value=tourism-platform" "Key=Environment,Value=staging" "Key=ManagedBy,Value=manual" \
    --region us-east-1

echo "✅ Staging secrets creation commands ready"
echo "⚠️  Update the database URLs and passwords before running!"
