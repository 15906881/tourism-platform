variable "region" { type = string }
variable "vpc_id" { type = string }
variable "public_subnet_ids" { type = list(string) }
variable "private_subnet_ids" { type = list(string) }
variable "app_name" { type = string }
variable "container_port" { type = number }
variable "ecr_image_url" { type = string }

variable "secret_prod_path" {
  type    = string
  default = "/tourism-platform/prod/app-db-url"
}

variable "create_db" {
  type    = bool
  default = false
}

variable "db_password" {
  type      = string
  sensitive = true
  default   = null
}
variable "rds_security_group_id" {
  type        = string
  description = "Existing RDS security group to allow ECS access"
}
