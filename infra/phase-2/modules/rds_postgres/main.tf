variable "create" {
  type    = bool
  default = false
}
variable "vpc_id" { type = string }
variable "private_subnet_ids" { type = list(string) }
variable "ecs_service_sg_id" { type = string }

variable "db_name" { type = string default = "tourism" }
variable "db_username" { type = string default = "app_user" }
variable "db_password" { type = string sensitive = true }
variable "engine_version" { type = string default = "16.3" }
variable "instance_class" { type = string default = "db.t4g.small" }
variable "allocated_storage" { type = number default = 20 }

resource "aws_db_subnet_group" "this" {
  count      = var.create ? 1 : 0
  name       = "rds-subnets"
  subnet_ids = var.private_subnet_ids
}

resource "aws_security_group" "db" {
  count       = var.create ? 1 : 0
  name        = "rds-postgres-sg"
  description = "Allow Postgres from ECS service"
  vpc_id      = var.vpc_id

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [var.ecs_service_sg_id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_instance" "this" {
  count                      = var.create ? 1 : 0
  identifier                 = "tourism-postgres"
  engine                     = "postgres"
  engine_version             = var.engine_version
  instance_class             = var.instance_class
  username                   = var.db_username
  password                   = var.db_password
  db_name                    = var.db_name
  allocated_storage          = var.allocated_storage
  storage_type               = "gp3"
  multi_az                   = false
  publicly_accessible        = false
  vpc_security_group_ids     = [aws_security_group.db[0].id]
  db_subnet_group_name       = aws_db_subnet_group.this[0].name
  deletion_protection        = false
  skip_final_snapshot        = true
  apply_immediately          = true
  auto_minor_version_upgrade = true
}
