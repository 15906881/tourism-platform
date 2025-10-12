# Variables
variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "app_name" {
  description = "Name of the application"
  type        = string
}

variable "region" {
  description = "AWS region"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs"
  type        = list(string)
}

variable "alb_target_group_arn" {
  description = "ARN of the ALB target group"
  type        = string
}

variable "alb_security_group_id" {
  description = "Security group ID of the ALB"
  type        = string
}

variable "ecr_image_url" {
  description = "ECR image URL"
  type        = string
}

variable "container_port" {
  description = "Port the container exposes"
  type        = number
  default     = 8080
}

variable "cpu" {
  description = "CPU units for the task"
  type        = string
  default     = "256"
}

variable "memory" {
  description = "Memory for the task"
  type        = string
  default     = "512"
}

variable "desired_count" {
  description = "Desired number of tasks"
  type        = number
  default     = 1
}

variable "secret_arn" {
  description = "ARN of the secrets manager secret"
  type        = string
  default     = ""
}

# Local values
locals {
  secrets_enabled = try(trim(var.secret_arn), "") != ""
}

# IAM policy document for secrets access
data "aws_iam_policy_document" "task_secrets" {
  dynamic "statement" {
    for_each = local.secrets_enabled ? [1] : []
    content {
      sid       = "AllowSecretsManagerRead"
      effect    = "Allow"
      actions   = ["secretsmanager:GetSecretValue"]
      resources = [var.secret_arn]
    }
  }
}

# IAM policy for secrets access
resource "aws_iam_policy" "task_secrets" {
  count  = local.secrets_enabled ? 1 : 0
  name   = "${var.project_name}-secrets-read"
  path   = "/"
  policy = data.aws_iam_policy_document.task_secrets.json
}

# IAM role for ECS tasks
data "aws_iam_policy_document" "ecs_tasks_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "task" {
  name               = "${var.project_name}-task-role"
  assume_role_policy = data.aws_iam_policy_document.ecs_tasks_assume.json
}

resource "aws_iam_role" "task_execution" {
  name               = "${var.project_name}-task-exec"
  assume_role_policy = data.aws_iam_policy_document.ecs_tasks_assume.json
}

# Attach ECS task execution role policy
resource "aws_iam_role_policy_attachment" "task_exec_ecs" {
  role       = aws_iam_role.task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# Attach secrets policy to task role
resource "aws_iam_role_policy_attachment" "task_secrets_attach" {
  count      = local.secrets_enabled ? 1 : 0
  role       = aws_iam_role.task.name
  policy_arn = aws_iam_policy.task_secrets[0].arn
}

# CloudWatch log group
resource "aws_cloudwatch_log_group" "app" {
  name              = "/ecs/${var.app_name}"
  retention_in_days = 30
}

# ECS cluster
resource "aws_ecs_cluster" "this" {
  name = "${var.app_name}-cluster"
}

# Security group for ECS service
resource "aws_security_group" "service" {
  name        = "${var.app_name}-svc-sg"
  description = "Allow traffic from ALB to app"
  vpc_id      = var.vpc_id

  ingress {
    from_port       = var.container_port
    to_port         = var.container_port
    protocol        = "tcp"
    security_groups = [var.alb_security_group_id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ECS task definition
resource "aws_ecs_task_definition" "this" {
  family                   = var.app_name
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.cpu
  memory                   = var.memory
  execution_role_arn       = aws_iam_role.task_execution.arn
  task_role_arn            = aws_iam_role.task.arn

  container_definitions = jsonencode([{
    name      = var.app_name
    image     = var.ecr_image_url
    essential = true
    portMappings = [{
      containerPort = var.container_port
      hostPort      = var.container_port
      protocol      = "tcp"
    }]
    environment = []
    secrets = local.secrets_enabled ? [{
      name      = "APP_DB_URL"
      valueFrom = var.secret_arn
    }] : []
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = aws_cloudwatch_log_group.app.name
        "awslogs-region"        = var.region
        "awslogs-stream-prefix" = var.app_name
      }
    }
    healthCheck = {
      command     = ["CMD-SHELL", "curl -f http://localhost:${var.container_port}/health || exit 1"]
      interval    = 30
      timeout     = 5
      retries     = 3
      startPeriod = 60
    }
  }])
}

# ECS service
resource "aws_ecs_service" "this" {
  name            = "${var.app_name}-svc"
  cluster         = aws_ecs_cluster.this.id
  task_definition = aws_ecs_task_definition.this.arn
  desired_count   = var.desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.subnet_ids
    security_groups  = [aws_security_group.service.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = var.alb_target_group_arn
    container_name   = var.app_name
    container_port   = var.container_port
  }

  health_check_grace_period_seconds = 60
  enable_execute_command            = true

  depends_on = [aws_iam_role_policy_attachment.task_exec_ecs]
}

# Outputs
output "cluster_id" {
  description = "ID of the ECS cluster"
  value       = aws_ecs_cluster.this.id
}

output "service_id" {
  description = "ID of the ECS service"
  value       = aws_ecs_service.this.id
}

output "task_definition_arn" {
  description = "ARN of the task definition"
  value       = aws_ecs_task_definition.this.arn
}

output "security_group_id" {
  description = "ID of the service security group"
  value       = aws_security_group.service.id
}
