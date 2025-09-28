# -------------------------
# Variables
# -------------------------
variable "app_name" {
  type = string
}
variable "vpc_id" {
  type = string
}
variable "public_subnet_ids" {
  type = list(string)
}
variable "target_port" {
  type = number
  default = 8080
}
variable "certificate_arn" {
  type = string
  default = ""
}

# -------------------------
# Security group
# -------------------------
resource "aws_security_group" "alb" {
  name        = "${var.app_name}-alb-sg"
  description = "ALB security group"
  vpc_id      = var.vpc_id
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTP from anywhere"
  }
  
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTPS from anywhere"
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# -------------------------
# ALB + TG + Listeners
# -------------------------
resource "aws_lb" "this" {
  name               = "${var.app_name}-alb"
  load_balancer_type = "application"
  internal           = false
  subnets            = var.public_subnet_ids
  security_groups    = [aws_security_group.alb.id]
}

resource "aws_lb_target_group" "this" {
  name_prefix = "tg-"
  port        = var.target_port
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"
  
  health_check {
    enabled             = true
    interval            = 15
    matcher             = "200-399"
    path                = "/"
    healthy_threshold   = 3
    unhealthy_threshold = 2
  }

  lifecycle {
    create_before_destroy = true
  }
}


resource "aws_lb_listener" "https" {
  count             = var.certificate_arn != "" ? 1 : 0
  load_balancer_arn = aws_lb.this.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS-1-2-2017-01"
  certificate_arn   = var.certificate_arn
  
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.this.arn
  }
}

# -------------------------
# Outputs
# -------------------------
output "alb_security_group_id" {
  value = aws_security_group.alb.id
}
output "alb_target_group_arn" {
  value = aws_lb_target_group.this.arn
}
output "alb_dns_name" {
  value = aws_lb.this.dns_name
}
output "alb_zone_id" {
  value = aws_lb.this.zone_id
}
output "alb_arn_suffix" {
  value = aws_lb.this.arn_suffix
}
output "target_group_arn_suffix" {
  value = aws_lb_target_group.this.arn_suffix
}

# HTTPS Listener (only create if certificate exists)
# HTTP -> HTTPS redirect (when cert present)
resource "aws_lb_listener" "http_redirect" {
  count             = var.certificate_arn != "" ? 1 : 0
  load_balancer_arn = aws_lb.this.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"
    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# Plain HTTP forward (when no cert)
resource "aws_lb_listener" "http_forward" {
  count             = var.certificate_arn == "" ? 1 : 0
  load_balancer_arn = aws_lb.this.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.this.arn
  }
}
