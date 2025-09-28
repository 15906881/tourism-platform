resource "aws_appautoscaling_target" "ecs_desired" {
  service_namespace  = "ecs"
  resource_id        = "service/${var.app_name}-cluster/${var.app_name}-svc"
  scalable_dimension = "ecs:service:DesiredCount"
  min_capacity       = 2
  max_capacity       = 4
  depends_on         = [module.ecs]
}

resource "aws_appautoscaling_policy" "cpu_target" {
  name               = "${var.app_name}-cpu50"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs_desired.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs_desired.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs_desired.service_namespace

  target_tracking_scaling_policy_configuration {
    target_value       = 50
    scale_in_cooldown  = 60
    scale_out_cooldown = 60
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
  }
}
