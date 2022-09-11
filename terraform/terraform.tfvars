# Azure subscription vars
subscription_id = "74214412-f442-4c67-a0ca-85088f71762c"
client_id = ""
client_secret = ""
tenant_id = "2a3ef6d7-c692-440c-87af-a8dd71845ede"

# Resource Group/Location
location = "eastus"
resource_group = "tfstate"
application_type = "p3testApp" # This name has to be globally unique.

# Tags
tier = "Test"
deployment = "Terraform"

# Network
virtual_network_name = "my-eqr-vnet"
address_space = ["10.5.0.0/16"]
address_prefix_test = "10.5.1.0/24"