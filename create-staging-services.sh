#!/bin/bash
echo '=== CREATING STAGING ECS SERVICES ==='

# Note: You'll need to get the actual subnet and security group IDs from your staging VPC
# These are placeholder values - update with real values from your AWS console

SUBNET_1="subnet-xxxxxxxxx"  # Replace with staging private subnet
SUBNET_2="subnet-yyyyyyyyy"  # Replace with staging private subnet  
SECURITY_GROUP="sg-zzzzzzzzz" # Replace with staging ECS security group

# Create tourism-api-staging service
aws ecs create-service \
    --cluster tourism-platform-staging \
    --service-name tourism-api-staging \
    --task-definition tourism-api-staging:1 \
    --desired-count 1 \
    --launch-type FARGATE \
    --network-configuration "awsvpcConfiguration={subnets=[$SUBNET_1,$SUBNET_2],securityGroups=[$SECURITY_GROUP],assignPublicIp=DISABLED}"

echo '✅ Staging ECS service creation command ready'
echo '⚠️  Update SUBNET_1, SUBNET_2, and SECURITY_GROUP with actual values from AWS'
