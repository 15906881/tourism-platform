# Secrets Rotation Management - Quick Reference

## Daily Health Check
\`\`\`bash
./rotation-status.sh
\`\`\`

## Detailed Status
\`\`\`bash
# Check all rotating secrets
aws secretsmanager list-secrets --region us-east-1 --query 'SecretList[?RotationEnabled==\`true\`].{Name:Name,LastRotated:LastRotatedDate}' --output table

# Check alarms
aws cloudwatch describe-alarms --alarm-name-prefix 'RotationLambda' --region us-east-1 --query 'MetricAlarms[].{AlarmName:AlarmName,State:StateValue}' --output table
\`\`\`

## Force Rotation (Troubleshooting)
\`\`\`bash
aws secretsmanager rotate-secret --secret-id 'tourism/dev/app_site_renderer' --region us-east-1
\`\`\`

## Check Logs
\`\`\`bash
# Recent rotation activity
aws logs filter-log-events --log-group-name '/aws/lambda/SecretsManagerRDSPostgreSQLRotationSingleUser' --start-time $(($(date +%s) - 3600))000 --filter-pattern 'ERROR' --region us-east-1
\`\`\`

## Documentation
- RUNBOOK.md - Complete operational procedures
- HARDENING_SUMMARY.md - System overview
