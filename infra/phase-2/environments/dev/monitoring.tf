# SNS topic for alerts
resource "aws_sns_topic" "alerts" {
  name = "${var.app_name}-alerts"
}

# ALB 5XX errors
resource "aws_cloudwatch_metric_alarm" "alb_5xx" {
  alarm_name          = "alb-5xx-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  threshold           = 5
  metric_name         = "HTTPCode_ELB_5XX_Count"
  namespace           = "AWS/ApplicationELB"
  period              = 300
  statistic           = "Sum"

  dimensions = {
    LoadBalancer = module.alb.alb_arn_suffix
  }

  alarm_description = "ALB is returning 5xx errors"
  alarm_actions     = [aws_sns_topic.alerts.arn]
}

# Target 5XX errors
resource "aws_cloudwatch_metric_alarm" "tg_5xx" {
  alarm_name          = "tg-5xx-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  threshold           = 5
  metric_name         = "HTTPCode_Target_5XX_Count"
  namespace           = "AWS/ApplicationELB"
  period              = 300
  statistic           = "Sum"

  dimensions = {
    LoadBalancer = module.alb.alb_arn_suffix
    TargetGroup  = module.alb.target_group_arn_suffix
  }

  alarm_description = "Target group returning 5xx errors"
  alarm_actions     = [aws_sns_topic.alerts.arn]
}

# Unhealthy hosts
resource "aws_cloudwatch_metric_alarm" "tg_unhealthy" {
  alarm_name          = "tg-unhealthy-hosts"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 2
  threshold           = 1
  metric_name         = "UnhealthyHostCount"
  namespace           = "AWS/ApplicationELB"
  period              = 300
  statistic           = "Maximum"

  dimensions = {
    LoadBalancer = module.alb.alb_arn_suffix
    TargetGroup  = module.alb.target_group_arn_suffix
  }

  alarm_description = "One or more targets are unhealthy"
  alarm_actions     = [aws_sns_topic.alerts.arn]
}

# Email subscription for alerts
resource "aws_sns_topic_subscription" "alerts_email" {
  count     = var.alerts_email != "" ? 1 : 0
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.alerts_email
}
