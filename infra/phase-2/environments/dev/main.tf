terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}
provider "aws" {
  region = var.region
}
# --- Data: default VPC & subnets (dev-friendly)
data "aws_vpc" "default" {
  default = true
}
data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}
# --- Secrets Manager secret for DB URL
resource "aws_secretsmanager_secret" "app_db_url" {
  name                    = var.secrets_manager_db_url
  description             = "Database URL for ${var.app_name}"
  recovery_window_in_days = 0
  tags                    = var.tags
}
resource "aws_secretsmanager_secret_version" "app_db_url" {
  secret_id     = aws_secretsmanager_secret.app_db_url.id
  secret_string = var.db_url
}
# --- ALB
module "alb" {
  certificate_arn   = var.certificate_arn
  source            = "../../modules/alb"
  app_name          = var.app_name
  vpc_id            = data.aws_vpc.default.id
  public_subnet_ids = data.aws_subnets.default.ids
  target_port       = var.container_port
}
# --- ECS
module "ecs" {
  source                = "../../modules/ecs_service"
  project_name          = var.project_name
  app_name              = var.app_name
  region                = var.region
  vpc_id                = data.aws_vpc.default.id
  private_subnet_ids    = data.aws_subnets.default.ids
  alb_security_group_id = module.alb.alb_security_group_id
  alb_target_group_arn  = module.alb.alb_target_group_arn
  ecr_image_url         = var.ecr_image_url
  container_port        = var.container_port
  cpu                   = var.cpu
  memory                = var.memory
  desired_count         = var.desired_count
  secret_arn            = aws_secretsmanager_secret.app_db_url.arn
}
output "alb_dns_name" {
  value = module.alb.alb_dns_name
}
output "alb_zone_id" {
  value = module.alb.alb_zone_id
}
output "alb_arn_suffix" {
  value = module.alb.alb_arn_suffix
}
output "target_group_arn_suffix" {
  value = module.alb.target_group_arn_suffix
}

# Alias A record to the ALB (created only if set)
resource "aws_route53_record" "app_alias" {
  count   = var.app_dns_name != "" && var.zone_id != "" ? 1 : 0
  zone_id = var.zone_id
  name    = var.app_dns_name
  type    = "A"
  alias {
    name                   = module.alb.alb_dns_name
    zone_id                = module.alb.alb_zone_id
    evaluate_target_health = true
  }
}

# Request cert (in the same region as the ALB)

resource "aws_sns_topic_subscription" "alerts_email" {
  count     = var.alerts_email != "" ? 1 : 0
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.alerts_email
}

resource "aws_appautoscaling_policy" "req_target" {
  name               = "${var.app_name}-req100"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs_desired.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs_desired.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs_desired.service_namespace

  target_tracking_scaling_policy_configuration {
    target_value       = 100
    scale_in_cooldown  = 60
    scale_out_cooldown = 60
    predefined_metric_specification {
      predefined_metric_type = "ALBRequestCountPerTarget"
      resource_label         = "${module.alb.alb_arn_suffix}/${module.alb.target_group_arn_suffix}"
    }
  }
}
