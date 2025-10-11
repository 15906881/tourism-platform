terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Simple staging secrets
resource "aws_secretsmanager_secret" "staging_app_db_url" {
  name        = "tourism-platform/staging/app-db-url"
  description = "Staging database connection string"
  
  tags = {
    Project     = "tourism-platform"
    Environment = "staging"
    ManagedBy   = "terraform"
  }
}

resource "aws_secretsmanager_secret" "staging_postgres_app_user" {
  name        = "tourism-platform/staging/postgres-app-user"
  description = "Staging PostgreSQL application user credentials"
  
  tags = {
    Project     = "tourism-platform"
    Environment = "staging"
    ManagedBy   = "terraform"
  }
}

resource "aws_secretsmanager_secret" "staging_postgres_report_user" {
  name        = "tourism-platform/staging/postgres-report-user"
  description = "Staging PostgreSQL reporting user credentials"
  
  tags = {
    Project     = "tourism-platform"
    Environment = "staging"
    ManagedBy   = "terraform"
  }
}

# Simple ECS task definition for staging
resource "aws_ecs_task_definition" "tourism_api_staging" {
  family                   = "tourism-api-staging"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = "arn:aws:iam::247006907925:role/ecsTaskExecutionRole"

  container_definitions = jsonencode([{
    name      = "tourism-api"
    image     = "247006907925.dkr.ecr.us-east-1.amazonaws.com/tourism-api:staging"
    essential = true
    
    portMappings = [{
      containerPort = 8000
      hostPort      = 8000
      protocol      = "tcp"
    }]

    environment = [
      { name = "NODE_ENV", value = "staging" },
      { name = "PORT", value = "8000" }
    ]

    secrets = [
      {
        name      = "APP_DB_URL"
        valueFrom = aws_secretsmanager_secret.staging_app_db_url.arn
      }
    ]

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/tourism-api-staging"
        "awslogs-region"        = "us-east-1"
        "awslogs-stream-prefix" = "ecs"
      }
    }
  }])

  tags = {
    Project     = "tourism-platform"
    Environment = "staging"
    ManagedBy   = "terraform"
  }
}

# CloudWatch log group for staging
resource "aws_cloudwatch_log_group" "tourism_api_staging" {
  name              = "/ecs/tourism-api-staging"
  retention_in_days = 30
  
  tags = {
    Project     = "tourism-platform"
    Environment = "staging"
    ManagedBy   = "terraform"
  }
}
