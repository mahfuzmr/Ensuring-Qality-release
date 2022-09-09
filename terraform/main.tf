
provider "azurerm" {
  tenant_id       = "${var.tenant_id}"
  subscription_id = "${var.subscription_id}"
  client_id       = "${var.client_id}"
  client_secret   = "${var.client_secret}"
  features {}
}

module "resource_group" {
  source               = "./modules/resource_group"
  resource_group       = "${var.resource_group}"
  location             = "${var.location}"
}
#Network
module "network" {
  source               = "./modules/network"
  resource_group       = "${module.resource_group.resource_group_name}"
  virtual_network_name = "${var.virtual_network_name}"
  location             = "${var.location}"
  application_type     = "${var.application_type}"
  address_space        = "${var.address_space}"
  resource_type        = "Network"
  address_prefix_test  = "${var.address_prefix_test}"
  
}

# Reference the AppService Module here.
module "appservice" {
  source           = "./modules/appservice"
  location         = "${var.location}"
  application_type = "${var.application_type}"
  resource_type    = "AppService"
  resource_group   = "${module.resource_group.resource_group_name}"
}
