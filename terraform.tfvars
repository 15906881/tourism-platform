project_name           = "tourism-platform"
region                 = "us-east-1"
container_image        = "247006907925.dkr.ecr.us-east-1.amazonaws.com/tourism-platform/api:develop"
container_port         = 8080
desired_count          = 1
cpu                    = 256
memory                 = 512
health_check_path      = "/health"
secrets_manager_db_url = "/tourism-platform/dev/app-db-url"
tags = { env = "dev", app = "tourism-platform" }≈›
