terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  # Backend config is supplied via backend.hcl during `terraform init`
  backend "s3" {}
}

provider "aws" {
  region = var.aws_region
  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# Data
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}
data "aws_availability_zones" "available" { state = "available" }

# Locals
locals {
  project_name = var.project_name
  env          = var.environment
  common_tags = {
    Project     = local.project_name
    Environment = local.env
    ManagedBy   = "terraform"
  }
}

# VPC
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags                 = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-vpc" })
}

# Internet Gateway
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags   = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-igw" })
}

# Public Subnets (2 AZs)
resource "aws_subnet" "public" {
  count                   = min(length(data.aws_availability_zones.available.names), 2)
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(var.vpc_cidr, 8, count.index)
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
  tags = merge(local.common_tags, {
    Name = "${local.project_name}-${local.env}-public-${count.index + 1}"
    Type = "public"
  })
}

# Private Subnets (2 AZs)
resource "aws_subnet" "private" {
  count             = min(length(data.aws_availability_zones.available.names), 2)
  vpc_id            = aws_vpc.main.id
  cidr_block        = cidrsubnet(var.vpc_cidr, 8, count.index + 10)
  availability_zone = data.aws_availability_zones.available.names[count.index]
  tags = merge(local.common_tags, {
    Name = "${local.project_name}-${local.env}-private-${count.index + 1}"
    Type = "private"
  })
}

# Public Route Table + routes
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-public-rt" })
}

# Associate public subnets
resource "aws_route_table_association" "public" {
  count          = length(aws_subnet.public)
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

# NAT EIP
resource "aws_eip" "nat" {
  domain     = "vpc"
  tags       = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-nat-eip" })
  depends_on = [aws_internet_gateway.main]
}

# NAT Gateway (in public[0])
resource "aws_nat_gateway" "main" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public[0].id
  tags          = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-nat" })
  depends_on    = [aws_internet_gateway.main]
}

# Private Route Table (default route -> NAT)
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.main.id
  }
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-private-rt" })
}

# Associate private subnets
resource "aws_route_table_association" "private" {
  count          = length(aws_subnet.private)
  subnet_id      = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private.id
}

# Gateway VPC Endpoints for S3 and DynamoDB (attach to private RT)
resource "aws_vpc_endpoint" "s3" {
  vpc_id            = aws_vpc.main.id
  service_name      = "com.amazonaws.${data.aws_region.current.name}.s3"
  vpc_endpoint_type = "Gateway"
  route_table_ids   = [aws_route_table.private.id]
  tags              = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-vpce-s3" })
}

resource "aws_vpc_endpoint" "dynamodb" {
  vpc_id            = aws_vpc.main.id
  service_name      = "com.amazonaws.${data.aws_region.current.name}.dynamodb"
  vpc_endpoint_type = "Gateway"
  route_table_ids   = [aws_route_table.private.id]
  tags              = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-vpce-dynamodb" })
}

# Security Groups
resource "aws_security_group" "lambda" {
  name_prefix = "${local.project_name}-${local.env}-lambda-"
  vpc_id      = aws_vpc.main.id
  description = "Security group for Lambda functions"
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-lambda-sg" })
}

resource "aws_security_group" "rds" {
  name_prefix = "${local.project_name}-${local.env}-rds-"
  vpc_id      = aws_vpc.main.id
  description = "Security group for Aurora PostgreSQL"
  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.lambda.id]
    description     = "PostgreSQL from Lambda"
  }
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-rds-sg" })
}

# DB Subnet Group (private subnets)
resource "aws_db_subnet_group" "main" {
  name        = "${local.project_name}-${local.env}-db-subnets"
  subnet_ids  = [for s in aws_subnet.private : s.id]
  description = "DB subnet group for private subnets"
  tags        = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-db-subnets" })
}

# Outputs
output "vpc_id" { value = aws_vpc.main.id }
output "public_subnet_ids" { value = [for s in aws_subnet.public : s.id] }
output "private_subnet_ids" { value = [for s in aws_subnet.private : s.id] }
output "lambda_security_group_id" { value = aws_security_group.lambda.id }
output "rds_security_group_id" { value = aws_security_group.rds.id }
output "db_subnet_group_name" { value = aws_db_subnet_group.main.name }
output "vpc_endpoint_s3_id" { value = aws_vpc_endpoint.s3.id }
output "vpc_endpoint_dynamodb_id" { value = aws_vpc_endpoint.dynamodb.id }
