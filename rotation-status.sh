#!/bin/bash
set -euo pipefail
REGION=us-east-1
echo '🔍 Quick Rotation Status'

# Get rotating secrets count - use a more reliable method
rotating=$(aws secretsmanager list-secrets --region "$REGION" \
  --query 'SecretList[?RotationEnabled==`true`].Name' --output text | wc -w | tr -d ' ')
echo "🔄 Rotating Secrets: $rotating"

# Get active alarms count
alarms=$(aws cloudwatch describe-alarms --alarm-name-prefix 'RotationLambda' \
  --region "$REGION" --query 'length(MetricAlarms[?StateValue==`ALARM`])' --output text | tr -d '[:space:]')
echo "🚨 Active Alarms: $alarms"

if [[ "$alarms" -eq 0 ]]; then
  echo '✅ System Healthy'
else
  echo '⚠️  Investigate alarms'
fi
