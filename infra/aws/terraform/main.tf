terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  # Backend config is supplied via backend.hcl during `terraform init`
  # backend "s3" {}
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
data "aws_availability_zones" "available" {
  state = "available"
}

# Resolve the DB secret by NAME (no hard-coded ARN suffix)
# Update the name here only if your secret path is different.
data "aws_secretsmanager_secret" "app_db_url" {
  name = "/tourism-platform/dev/app-db-url"
}

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
    security_groups = [aws_security_group.lambda.id, aws_security_group.ecs_tasks.id]
    description     = "PostgreSQL from Lambda and ECS"
  }
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-rds-sg" })
}

# Security Group for ECS Tasks
resource "aws_security_group" "ecs_tasks" {
  name_prefix = "${local.project_name}-${local.env}-ecs-tasks-"
  vpc_id      = aws_vpc.main.id
  description = "Security group for ECS tasks"
  
  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
    description = "API port"
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
    description = "All outbound traffic"
  }
  
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-ecs-tasks-sg" })
}

# DB Subnet Group (private subnets)
resource "aws_db_subnet_group" "main" {
  name        = "${local.project_name}-${local.env}-db-subnets"
  subnet_ids  = [for s in aws_subnet.private : s.id]
  description = "DB subnet group for private subnets"
  tags        = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-db-subnets" })
}

# ECR Repository
resource "aws_ecr_repository" "tourism_api" {
  name                 = "tourism-api"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration {
    scan_on_push = true
  }
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-ecr" })
}

# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "${local.project_name}-${local.env}"
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-cluster" })
}

# ECS Task Execution Role
resource "aws_iam_role" "ecs_execution_role" {
  name = "${local.project_name}-${local.env}-ecs-execution-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
  tags = local.common_tags
}

# Attach managed policy for ECS task execution
resource "aws_iam_role_policy_attachment" "ecs_execution_role_policy" {
  role       = aws_iam_role.ecs_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# IAM policy for Secrets Manager access (exact secret ARN from data source)
resource "aws_iam_role_policy" "ecs_secrets_policy" {
  name = "${local.project_name}-${local.env}-ecs-secrets-policy"
  role = aws_iam_role.ecs_execution_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["secretsmanager:GetSecretValue"]
        Resource = [data.aws_secretsmanager_secret.app_db_url.arn]
      }
    ]
  })
}

# CloudWatch Log Group
resource "aws_cloudwatch_log_group" "ecs_tourism_api" {
  name              = "/ecs/tourism-api"
  retention_in_days = 7
  tags              = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-ecs-logs" })
}

# ECS Task Definition
resource "aws_ecs_task_definition" "tourism_api" {
  family                   = "tourism-api"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_execution_role.arn
  
  container_definitions = jsonencode([
    {
      name       = "api"
      image      = "${aws_ecr_repository.tourism_api.repository_url}:develop"
      essential  = true
      
      portMappings = [
        {
          containerPort = 3000
          protocol      = "tcp"
        }
      ]
      
      environment = [
        {
          name  = "NODE_OPTIONS"
          value = "--use-openssl-ca"
        },
        {
          name  = "NODE_ENV"
          value = "production"
        }
      ]
      
      secrets = [
        {
          name      = "APP_DB_URL"
          valueFrom = data.aws_secretsmanager_secret.app_db_url.arn
        }
      ]
      
      healthCheck = {
        command     = ["CMD-SHELL", "wget -qO- http://localhost:3000/health | grep -q '\"ok\":true' || exit 1"]
        interval    = 15
        timeout     = 5
        retries     = 3
        startPeriod = 45
      }
      
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.ecs_tourism_api.name
          "awslogs-region"        = data.aws_region.current.name
          "awslogs-stream-prefix" = "api"
        }
      }
    }
  ])
  
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-task-definition" })
}

# ECS Service
resource "aws_ecs_service" "tourism_api" {
  name            = "tourism-api"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.tourism_api.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  
  network_configuration {
    subnets          = [for s in aws_subnet.public : s.id]
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = true
  }
  
  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 100
  }
  
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-service" })
}

# Outputs
output "vpc_id" { value = aws_vpc.main.id }
output "public_subnet_ids" { value = [for s in aws_subnet.public : s.id] }
output "private_subnet_ids" { value = [for s in aws_subnet.private : s.id] }
output "lambda_security_group_id" { value = aws_security_group.lambda.id }
output "rds_security_group_id" { value = aws_security_group.rds.id }
output "ecs_tasks_security_group_id" { value = aws_security_group.ecs_tasks.id }
output "db_subnet_group_name" { value = aws_db_subnet_group.main.name }
output "vpc_endpoint_s3_id" { value = aws_vpc_endpoint.s3.id }
output "vpc_endpoint_dynamodb_id" { value = aws_vpc_endpoint.dynamodb.id }
output "ecs_cluster_name" { value = aws_ecs_cluster.main.name }
output "ecs_service_name" { value = aws_ecs_service.tourism_api.name }
output "ecr_repository_url" { value = aws_ecr_repository.tourism_api.repository_url }

# Module calls (add to end of main.tf)
module "alb" {
  source = "../../modules/alb"
  
  app_name          = var.app_name
  vpc_id           = aws_vpc.main.id
  public_subnet_ids = [for s in aws_subnet.public : s.id]
  certificate_arn  = var.certificate_arn
}

module "ecs" {
  source = "../../modules/ecs_service"
  
  project_name             = var.project_name
  app_name                 = var.app_name
  container_port          = var.container_port
  ecr_image_url          = var.ecr_image_url
  secret_arn             = data.aws_secretsmanager_secret.app_db_url.arn
  vpc_id                 = aws_vpc.main.id
  private_subnet_ids     = [for s in aws_subnet.private : s.id]
  alb_target_group_arn   = module.alb.target_group_arn
  alb_security_group_id  = module.alb.alb_security_group_id
  region = data.aws_region.current.name
}
