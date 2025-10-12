#!/usr/bin/env bash
set -euo pipefail

REGION='us-east-1'
DBID='tourism-platform-dev-postgres-restored'
USER_POOL_ID='us-east-1_WgdTIpEMe'
S3_BUCKET='tourism-platform-tfstate-247006907925-us-east-1'
API_BASE='https://api.weblynk.app'
HEALTH_PATH='/health'

ecs_ok=false
ecs_cluster=$(aws ecs list-clusters --region $REGION --query 'clusterArns[0]' --output text 2>/dev/null || true)
[ "$ecs_cluster" != 'None' ] && [ -n "$ecs_cluster" ] && ecs_ok=true

rds_ok=false
endpoint=$(aws rds describe-db-instances --db-instance-identifier $DBID --query 'DBInstances[0].Endpoint.Address' --output text --region $REGION 2>/dev/null || true)
secret=$(aws rds describe-db-instances --db-instance-identifier $DBID --query 'DBInstances[0].MasterUserSecret.SecretArn' --output text --region $REGION 2>/dev/null || true)
pass=$(aws secretsmanager get-secret-value --secret-id $secret --query 'SecretString' --output text --region $REGION 2>/dev/null | python3 -c 'import sys,json;print(json.loads(sys.stdin.read())["password"])' || true)
export PGSSLMODE='require'
if [ -n "$endpoint" ] && [ -n "$pass" ]; then
  if PGPASSWORD=$pass psql -h $endpoint -U dbadmin -d postgres -tAc 'SELECT 1' >/dev/null 2>&1; then rds_ok=true; fi
fi

cog_ok=false
disc_url="https://cognito-idp.$REGION.amazonaws.com/$USER_POOL_ID/.well-known/openid-configuration"
jwks_url="https://cognito-idp.$REGION.amazonaws.com/$USER_POOL_ID/.well-known/jwks.json"
code1=$(curl -sS -o /dev/null -w '%{http_code}' $disc_url || true)
code2=$(curl -sS -o /dev/null -w '%{http_code}' $jwks_url || true)
[ "$code1" = '200' ] && [ "$code2" = '200' ] && cog_ok=true

s3_ok=false
aws s3 ls s3://$S3_BUCKET --region $REGION >/dev/null 2>&1 && s3_ok=true

redis_ok=false   # not provisioned yet

vpc_ok=false
vpc=$(aws ec2 describe-vpcs --region $REGION --filters 'Name=tag:Name,Values=tourism-platform-dev-vpc' --query 'Vpcs[0].VpcId' --output text 2>/dev/null || true)
[ "$vpc" != 'None' ] && [ -n "$vpc" ] && vpc_ok=true

api_ok=false
http_code=$(curl -sS -o /dev/null -w '%{http_code}' ${API_BASE}${HEALTH_PATH} || true)
[ "$http_code" = '200' ] && api_ok=true

printf '\n== Tourism Platform — Layer-1 Validation ==\n'
printf 'Account: %s | Region: %s\n\n' "$(aws sts get-caller-identity --query Account --output text 2>/dev/null || echo '?')" "$REGION"
printf '%-25s | %-5s | %s\n' 'ECS / Fargate'        "$([ "$ecs_ok" = true ]  && echo PASS || echo FAIL)" "$ecs_cluster"
printf '%-25s | %-5s | %s\n' 'RDS / PostgreSQL'     "$([ "$rds_ok" = true ]  && echo PASS || echo FAIL)" "$endpoint"
printf '%-25s | %-5s | %s\n' 'Cognito Auth'         "$([ "$cog_ok" = true ]  && echo PASS || echo FAIL)" "$USER_POOL_ID"
printf '%-25s | %-5s | %s\n' 'S3 / CloudFront'      "$([ "$s3_ok" = true ]   && echo PASS || echo FAIL)" "$S3_BUCKET"
printf '%-25s | %-5s | %s\n' 'ElastiCache / Redis'  "$([ "$redis_ok" = true ] && echo PASS || echo FAIL)" '-'
printf '%-25s | %-5s | %s\n' 'VPC / Networking'     "$([ "$vpc_ok" = true ]  && echo PASS || echo FAIL)" "$vpc"
printf '%-25s | %-5s | %s\n' 'API / Health'         "$([ "$api_ok" = true ]  && echo PASS || echo FAIL)" "${API_BASE}${HEALTH_PATH}"

pass_count=0
[ "$ecs_ok" = true ]   && pass_count=$((pass_count+1))
[ "$rds_ok" = true ]   && pass_count=$((pass_count+1))
[ "$cog_ok" = true ]   && pass_count=$((pass_count+1))
[ "$s3_ok" = true ]    && pass_count=$((pass_count+1))
[ "$redis_ok" = true ] && pass_count=$((pass_count+1))
[ "$vpc_ok" = true ]   && pass_count=$((pass_count+1))
[ "$api_ok" = true ]   && pass_count=$((pass_count+1))
printf '\nPass: %d / 7 components\n' "$pass_count"
