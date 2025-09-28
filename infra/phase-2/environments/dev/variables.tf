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
variable "ecr_image_url" {
  description = "ECR image URL"
  type        = string
}
variable "container_port" {
  description = "Port the container exposes"
  type        = number
}
variable "cpu" {
  description = "CPU units for the task"
  type        = string
}
variable "memory" {
  description = "Memory for the task"
  type        = string
}
variable "desired_count" {
  description = "Desired number of tasks"
  type        = number
}
variable "secrets_manager_db_url" {
  description = "Secrets Manager secret name for DB URL"
  type        = string
}
variable "db_url" {
  description = "Database URL"
  type        = string
  sensitive   = true
}
variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default     = {}
}
variable "certificate_arn" {
  description = "SSL certificate ARN for HTTPS"
  type        = string
  default     = ""
}

variable "zone_id" {
  description = "Route53 hosted zone ID"
  type        = string
  default     = ""
}

variable "app_dns_name" {
  description = "DNS name for the application"
  type        = string
  default     = ""
}

variable "alerts_email" {
  description = "Email for alarm notifications"
  type        = string
  default     = ""
}
