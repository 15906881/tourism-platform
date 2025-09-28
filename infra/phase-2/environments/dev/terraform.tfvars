project_name           = "tourism-platform"
app_name               = "tourism-platform"
region                 = "us-east-1"
ecr_image_url          = "247006907925.dkr.ecr.us-east-1.amazonaws.com/tourism-platform/api:develop"
container_port         = 8000
cpu                    = "256"
memory                 = "512"
desired_count          = 2
secrets_manager_db_url = "/tourism-platform/dev/app-db-url"
db_url                 = "postgres://user:pass@host:5432/dbname"
certificate_arn        = "arn:aws:acm:us-east-1:247006907925:certificate/10419c45-c616-47e3-a621-a9be81492353"
tags                   = { env = "dev", app = "tourism-platform" }

# DNS Configuration
zone_id      = "Z02948903OLKTZ9QGG02Y"
app_dns_name = "api.weblynk.app"
alerts_email = "senaigetachew@gmail.com"
