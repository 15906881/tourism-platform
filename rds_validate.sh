#!/usr/bin/env bash
set -euo pipefail

say(){ printf '%s\n' "$*"; }

REGION='us-east-1'
DBID='tourism-platform-dev-postgres-restored'

ENDPOINT=$(aws rds describe-db-instances --db-instance-identifier $DBID --query 'DBInstances[0].Endpoint.Address' --output text --region $REGION)
USER=$(aws rds describe-db-instances --db-instance-identifier $DBID --query 'DBInstances[0].MasterUsername' --output text --region $REGION)
DBNAME=$(aws rds describe-db-instances --db-instance-identifier $DBID --query 'DBInstances[0].DBName' --output text --region $REGION)
SECRET_ARN=$(aws rds describe-db-instances --db-instance-identifier $DBID --query 'DBInstances[0].MasterUserSecret.SecretArn' --output text --region $REGION)

PASS=$(aws secretsmanager get-secret-value --secret-id $SECRET_ARN --query 'SecretString' --output text --region $REGION | python3 -c 'import sys,json;print(json.loads(sys.stdin.read())["password"])')

tcp_ok=false
nc -z -w 5 $ENDPOINT 5432 >/dev/null 2>&1 && tcp_ok=true

export PGSSLMODE='require'
pg_ok=false
if PGPASSWORD="$PASS" psql -h $ENDPOINT -U $USER -d $DBNAME -tAc 'SELECT 1' >/dev/null 2>&1; then pg_ok=true; fi

status='FAIL'
$tcp_ok && $pg_ok && status='PASS'

printf '%-30s | %-4s | %s\n' '1.1.2 RDS connectivity' "$status" 'Old instance broken; using restored DB. Update DATABASE_URL to restored endpoint.'
