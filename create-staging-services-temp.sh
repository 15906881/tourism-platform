#!/bin/bash
echo '=== CREATING STAGING SERVICES USING DEV INFRASTRUCTURE ==='

# Use dev infrastructure for now (we'll create proper staging later)
# Get dev subnets and security group
DEV_SUBNETS=$(aws ec2 describe-subnets --filters "Name=tag:Environment,Values=dev" --query 'Subnets[*].SubnetId' --output text | tr '\n' ',' | sed 's/,$//')
DEV_SG=$(aws ec2 describe-security-groups --filters "Name=tag:Name,Values=*ecs*" "Name=tag:Environment,Values=dev" --query 'SecurityGroups[0].GroupId' --output text)

echo "Using subnets: $DEV_SUBNETS"
echo "Using security group: $DEV_SG"

# Create tourism-api-staging service using dev infrastructure
aws ecs create-service \
    --cluster tourism-platform-cluster \
    --service-name tourism-api-staging \
    --task-definition tourism-api-staging:1 \
    --desired-count 1 \
    --launch-type FARGATE \
    --network-configuration "awsvpcConfiguration={subnets=[$DEV_SUBNETS],securityGroups=[$DEV_SG],assignPublicIp=DISABLED}" \
    --tags key=Environment,value=staging key=Project,value=tourism-platform

echo '✅ Staging ECS service created using dev infrastructure'
