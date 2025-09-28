########################################
# ECS Service module (clean, validated)
########################################

# -------------------------
# Variables
# -------------------------
variable "app_name" {
  type = string
}

variable "region" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "private_subnet_ids" {
  type = list(string)
}

variable "alb_target_group_arn" {
  type = string
}

variable "alb_security_group_id" {
  type = string
}

variable "ecr_image_url" {
  type = string
}

variable "container_port" {
  type    = number
  default = 8080
}

variable "cpu" {
  type    = string
  default = "256"
}

variable "memory" {
  type    = string
  default = "512"
}

variable "desired_count" {
  type    = number
  default = 1
}

variable "health_check_grace_period_seconds" {
  type    = number
  default = 60
}

variable "secret_arn" {
  description = "Secrets Manager ARN for APP_DB_URL. Leave empty to disable."
  type        = string
  default     = ""
}

# -------------------------
# Locals
# -------------------------
locals {
  secrets_enabled = try(trim(var.secret_arn), "") != ""
}

# -------------------------
# IAM (task + execution roles)
# -------------------------
data "aws_iam_policy_document" "ecs_tasks_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "task_execution" {
  name               = "${var.app_name}-task-exec"
  assume_role_policy = data.aws_iam_policy_document.ecs_tasks_assume.json
}

resource "aws_iam_role_policy_attachment" "task_exec_ecs" {
  role       = aws_iam_role.task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role" "task" {
  name               = "${var.app_name}-task-role"
  assume_role_policy = data.aws_iam_policy_document.ecs_tasks_assume.json
}

# -------------------------
# Optional Secrets policy (only if secret_arn provided)
# -------------------------
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

resource "aws_iam_policy" "task_secrets" {
  count  = local.secrets_enabled ? 1 : 0
  name   = "${var.app_name}-secrets-read"
  path   = "/"
  policy = data.aws_iam_policy_document.task_secrets.json
}

resource "aws_iam_role_policy_attachment" "task_secrets_attach" {
  count      = local.secrets_enabled ? 1 : 0
  role       = aws_iam_role.task.name
  policy_arn = aws_iam_policy.task_secrets[0].arn
}

# -------------------------
# Logging
# -------------------------
resource "aws_cloudwatch_log_group" "app" {
  name              = "/ecs/${var.app_name}"
  retention_in_days = 30
}

# -------------------------
# ECS Cluster
# -------------------------
resource "aws_ecs_cluster" "this" {
  name = "${var.app_name}-cluster"
}

# -------------------------
# Networking (SG for service)
# -------------------------
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

# -------------------------
# Task Definition
# -------------------------
resource "aws_ecs_task_definition" "this" {
  family                   = var.app_name
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.cpu
  memory                   = var.memory
  execution_role_arn       = aws_iam_role.task_execution.arn
  task_role_arn            = aws_iam_role.task.arn

  container_definitions = jsonencode([
    {
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
    }
  ])
}

# -------------------------
# Service
# -------------------------
resource "aws_ecs_service" "this" {
  name                               = "${var.app_name}-svc"
  cluster                            = aws_ecs_cluster.this.id
  task_definition                    = aws_ecs_task_definition.this.arn
  desired_count                      = var.desired_count
  launch_type                        = "FARGATE"
  health_check_grace_period_seconds  = var.health_check_grace_period_seconds
  enable_execute_command             = true

  network_configuration {
    subnets          = var.private_subnet_ids
    security_groups  = [aws_security_group.service.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = var.alb_target_group_arn
    container_name   = var.app_name
    container_port   = var.container_port
  }

  lifecycle {
    ignore_changes = [desired_count]
  }

  depends_on = [aws_iam_role_policy_attachment.task_exec_ecs]
}

# -------------------------
# Outputs
# -------------------------
output "cluster_name" {
  value = aws_ecs_cluster.this.name
}

output "service_security_group_id" {
  value = aws_security_group.service.id
}

output "service_name" {
  value = aws_ecs_service.this.name
}
