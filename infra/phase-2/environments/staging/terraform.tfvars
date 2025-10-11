# Staging Environment Configuration
environment = "staging"
project_name = "tourism-platform"

# Staging-specific settings
instance_type = "t3.small"  # Smaller than prod for cost savings
min_capacity = 1
max_capacity = 2

# Database settings
db_instance_class = "db.t3.small"
db_allocated_storage = 20

# Networking
vpc_cidr = "10.1.0.0/16"

# Tags
common_tags = {
  Project     = "tourism-platform"
  Environment = "staging"
  ManagedBy   = "terraform"
}
