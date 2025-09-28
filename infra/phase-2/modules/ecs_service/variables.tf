variable "cpu" {
  type    = number
  default = 512
}

variable "memory" {
  type    = number
  default = 1024
}

variable "desired_count" {
  type    = number
  default = 1
}

variable "health_check_grace_period_seconds" {
  type    = number
  default = 60
}

variable "project_name" {
  type        = string
  description = "Name of the project"
}
