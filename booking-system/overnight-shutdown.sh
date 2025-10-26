#!/bin/bash

# Overnight Development Environment Shutdown Script
set -e

REGION="us-east-1"
DRY_RUN=${DRY_RUN:-false}
ENV_TAG="Environment"
ENV_VALUE="dev"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }

check_aws_cli() {
    if ! command -v aws &> /dev/null; then
        log_error "AWS CLI is not installed"
        exit 1
    fi
    if ! aws sts get-caller-identity &> /dev/null; then
        log_error "AWS CLI not configured"
        exit 1
    fi
}

stop_ec2_instances() {
    log_info "Looking for EC2 instances to stop..."
    local instance_ids
    instance_ids=$(aws ec2 describe-instances \
        --region $REGION \
        --query "Reservations[].Instances[?State.Name=='running' && Tags[?Key=='$ENV_TAG' && Value=='$ENV_VALUE']].InstanceId" \
        --output text)
    
    if [[ -z "$instance_ids" ]]; then
        log_info "No running EC2 instances found"
        return 0
    fi
    
    log_info "Found EC2 instances: $instance_ids"
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log_warn "DRY RUN: Would stop EC2 instances: $instance_ids"
        return 0
    fi
    
    aws ec2 stop-instances --region $REGION --instance-ids $instance_ids
    log_success "Stopped EC2 instances: $instance_ids"
}

stop_rds_instances() {
    log_info "Looking for RDS instances to stop..."
    local db_instances
    db_instances=$(aws rds describe-db-instances \
        --region $REGION \
        --query "DBInstances[?DBInstanceStatus=='available' && !contains(DBInstanceIdentifier, 'prod')].DBInstanceIdentifier" \
        --output text)
    
    if [[ -z "$db_instances" ]]; then
        log_info "No RDS instances found to stop"
        return 0
    fi
    
    local instances_to_stop=()
    for db in $db_instances; do
        if [[ "$db" != *"prod"* && "$db" != *"master"* ]]; then
            instances_to_stop+=("$db")
        fi
    done
    
    if [[ ${#instances_to_stop[@]} -eq 0 ]]; then
        log_info "No RDS instances to stop after filtering"
        return 0
    fi
    
    log_info "Found RDS instances to stop: ${instances_to_stop[*]}"
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log_warn "DRY RUN: Would stop RDS instances: ${instances_to_stop[*]}"
        return 0
    fi
    
    for db_instance in "${instances_to_stop[@]}"; do
        log_info "Stopping RDS instance: $db_instance"
        aws rds stop-db-instance --region $REGION --db-instance-identifier "$db_instance" ||
            log_error "Failed to stop RDS instance: $db_instance"
    done
    
    log_success "Initiated stop for RDS instances"
}

main() {
    log_info "Starting overnight shutdown procedure..."
    log_info "Region: $REGION"
    log_info "Dry Run: $DRY_RUN"
    
    check_aws_cli
    
    local account_id
    account_id=$(aws sts get-caller-identity --query "Account" --output text)
    log_warn "Running in Account: $account_id"
    
    if [[ "$DRY_RUN" != "true" ]]; then
        echo -e "${YELLOW}WARNING: This will stop real resources. Are you sure? (yes/no)${NC}"
        read -r confirmation
        if [[ "$confirmation" != "yes" ]]; then
            log_error "Shutdown cancelled by user"
            exit 1
        fi
    fi
    
    stop_ec2_instances
    stop_rds_instances
    
    log_success "Overnight shutdown procedure completed!"
}

[[ "${BASH_SOURCE[0]}" == "${0}" ]] && main "$@"
