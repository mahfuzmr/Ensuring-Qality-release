resource "azurerm_public_ip" "public_ip" {
  name                = "pubip-${var.application_type}-${var.resource_type}"
  resource_group_name = "${var.resource_group}"
  location            = "${var.location}"
  allocation_method   = "Dynamic"

  tags = {
    environment = "Training"   
  }
}