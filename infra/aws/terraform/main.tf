# Add these resources to your main.tf file

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

# IAM policy for Secrets Manager access
resource "aws_iam_role_policy" "ecs_secrets_policy" {
  name = "${local.project_name}-${local.env}-ecs-secrets-policy"
  role = aws_iam_role.ecs_execution_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue"
        ]
        Resource = [
          "arn:aws:secretsmanager:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:secret:tourism-platform/dev/app-db-url-*"
        ]
      }
    ]
  })
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

# CloudWatch Log Group
resource "aws_cloudwatch_log_group" "ecs_tourism_api" {
  name              = "/ecs/tourism-api"
  retention_in_days = 7
  tags              = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-ecs-logs" })
}

# ECS Task Definition
resource "aws_ecs_task_definition" "tourism_api" {
  family                   = "tourism-api"
  network_mode            = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                     = "256"
  memory                  = "512"
  execution_role_arn      = aws_iam_role.ecs_execution_role.arn
  
  container_definitions = jsonencode([
    {
      name  = "api"
      image = "${aws_ecr_repository.tourism_api.repository_url}:develop"
      essential = true
      
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
          valueFrom = "arn:aws:secretsmanager:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:secret:tourism-platform/dev/app-db-url-I97Qvt"
        }
      ]
      
      healthCheck = {
        command = [
          "CMD-SHELL",
          "wget -qO- http://localhost:3000/health | grep -q '\"ok\":true' || exit 1"
        ]
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
    subnets         = [for s in aws_subnet.public : s.id]
    security_groups = [aws_security_group.ecs_tasks.id]
    assign_public_ip = true
  }
  
  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 100
  }
  
  tags = merge(local.common_tags, { Name = "${local.project_name}-${local.env}-service" })
}

# Additional outputs for ECS resources
output "ecs_cluster_name" { value = aws_ecs_cluster.main.name }
output "ecs_service_name" { value = aws_ecs_service.tourism_api.name }
output "ecr_repository_url" { value = aws_ecr_repository.tourism_api.repository_url }
