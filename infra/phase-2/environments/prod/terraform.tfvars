region             = "us-east-1"
vpc_id             = "vpc-045133bfce986cdad"
public_subnet_ids  = ["subnet-03b98d781d854d4af", "subnet-0f3f904579aa9a89d"]
private_subnet_ids = ["subnet-0fc8039897781b630", "subnet-02490a4625a498388"]

app_name       = "tourism-api"
container_port = 8080
ecr_image_url  = "247006907925.dkr.ecr.us-east-1.amazonaws.com/tourism-api:latest"

secret_prod_path = "/tourism-platform/prod/app-db-url"

# Leave DB off for bootstrap; we’ll enable later
create_db = false
