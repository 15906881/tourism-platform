#!/bin/bash
echo '=== Completing Quick Wins ==='

# Update Lambda timeout
echo '1. Updating Lambda timeout to 60s...'
aws lambda update-function-configuration --region 'us-east-1' --function-name 'SecretsManagerRDSPostgreSQLRotationSingleUser' --timeout 60

# Update CloudWatch alarm threshold
echo '2. Updating CloudWatch alarm threshold to 48s...'
NEW_THRESHOLD=48000
SNS_ARN='arn:aws:sns:us-east-1:247006907925:tourism-critical-alerts'

aws cloudwatch put-metric-alarm --region 'us-east-1' \
  --alarm-name 'RotationLambda-Duration>=80%-5m' \
  --metric-name 'Duration' --namespace 'AWS/Lambda' --dimensions 'Name=FunctionName,Value=SecretsManagerRDSPostgreSQLRotationSingleUser' \
  --statistic 'Average' --period 60 --evaluation-periods 5 --threshold $NEW_THRESHOLD \
  --comparison-operator 'GreaterThanOrEqualToThreshold' \
  --alarm-actions "$SNS_ARN"

echo '✅ Quick wins completed!'

# Verify changes
echo ''
echo 'Verification:'
echo 'Lambda timeout:'
aws lambda get-function-configuration --region 'us-east-1' --function-name 'SecretsManagerRDSPostgreSQLRotationSingleUser' --query 'Timeout' --output text

echo 'CloudWatch alarm threshold:'
aws cloudwatch describe-alarms --alarm-name-prefix 'RotationLambda' --region 'us-east-1' --query 'MetricAlarms[?AlarmName==\`RotationLambda-Duration>=80%-5m\`].{AlarmName:AlarmName,Threshold:Threshold}' --output table
