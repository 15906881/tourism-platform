terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" { region = var.region }

# Creates the canonical secret shell (value set in console later)
resource "aws_secretsmanager_secret" "app_db_url" {
  name = var.secret_prod_path
}

module "alb" {
  source            = "../../modules/alb"
  vpc_id            = var.vpc_id
  public_subnet_ids = var.public_subnet_ids
  app_name          = var.app_name

  # Bootstrap to /health (works without DB). Switch to "/ready" after DB exists.
  health_check_path = "/health"
  target_port       = var.container_port
}

module "ecs" {
  source                            = "../../modules/ecs_service"
  region                            = var.region
  app_name                          = var.app_name
  container_port                    = var.container_port
  ecr_image_url                     = var.ecr_image_url
  secret_arn                        = aws_secretsmanager_secret.app_db_url.arn
  vpc_id                            = var.vpc_id
  private_subnet_ids                = var.private_subnet_ids
  alb_target_group_arn              = module.alb.target_group_arn
  alb_security_group_id             = module.alb.alb_security_group_id
  cpu                               = 512
  memory                            = 1024
  desired_count                     = 1
  health_check_grace_period_seconds = 60
}

output "alb_dns_name" {
  value = module.alb.alb_dns_name
}


# Allow Postgres from the ECS service SG to the existing RDS SG
resource "aws_security_group_rule" "rds_ingress_from_ecs" {
  type              = "ingress"
  security_group_id = var.rds_security_group_id
  from_port         = 5432

  to_port                  = 5432
  protocol                 = "tcp"
  source_security_group_id = module.ecs.service_security_group_id
  description              = "PostgreSQL from ECS service"
}
