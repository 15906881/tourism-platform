# Quick IAM Setup for Current Account

## Step 1: Create Dedicated IAM User
1. Go to IAM Console → Users → 'Add user'
2. Name: 'tourism-secrets-admin'
3. Attach policy: 'SecretsManagerReadWrite' + 'LambdaReadWrite'
4. Get Access Key & Secret Key
5. Configure:
\`\`\`bash
aws configure --profile tourism-secrets-admin
# Enter: Access Key, Secret Key, Region: us-east-1, Output: json
\`\`\`

## Step 2: Complete Quick Wins
\`\`\`bash
export AWS_PROFILE='tourism-secrets-admin'

# Update Lambda timeout
aws lambda update-function-configuration --region 'us-east-1' --function-name 'SecretsManagerRDSPostgreSQLRotationSingleUser' --timeout 60

# Update CloudWatch alarm threshold
SNS_ARN='arn:aws:sns:us-east-1:247006907925:tourism-critical-alerts'
aws cloudwatch put-metric-alarm --region 'us-east-1' --alarm-name 'RotationLambda-Duration>=80%-5m' --metric-name 'Duration' --namespace 'AWS/Lambda' --dimensions 'Name=FunctionName,Value=SecretsManagerRDSPostgreSQLRotationSingleUser' --statistic 'Average' --period 60 --evaluation-periods 5 --threshold 48000 --comparison-operator 'GreaterThanOrEqualToThreshold' --alarm-actions "$SNS_ARN"

# Verify changes
aws lambda get-function-configuration --region 'us-east-1' --function-name 'SecretsManagerRDSPostgreSQLRotationSingleUser' --query 'Timeout' --output text
aws cloudwatch describe-alarms --alarm-name-prefix 'RotationLambda' --region 'us-east-1' --query 'MetricAlarms[?AlarmName==\`RotationLambda-Duration>=80%-5m\`].{AlarmName:AlarmName,Threshold:Threshold}' --output table
\`\`\`
