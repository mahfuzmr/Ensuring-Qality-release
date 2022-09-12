# Azure subscription vars
subscription_id = ""
client_id = ""
client_secret = ""
tenant_id = ""

# Resource Group/Location
location = "WestEurope"
resource_group = "tfstate"
application_type = "p3testApp" # This name has to be globally unique.

# Tags
tier = "Test"
deployment = "Terraform"

# Network
virtual_network_name = "my-eqr-vnet"
address_space = ["10.5.0.0/16"]
address_prefix_test = "10.5.1.0/24"