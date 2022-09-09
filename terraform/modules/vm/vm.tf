resource "azurerm_network_interface" "nic" {
    resource_group_name = "${var.resource_group}"
    location            = "${var.location}"
    name                = "nic-${var.application_type}-${var.resource_type}"
 
 

  ip_configuration {
    name                          = "ipconfig"
    subnet_id                     = "${var.subnet_id}"
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = "${var.public_ip}"
  }
}
resource "tls_private_key" "Azuredevops" {
  algorithm   = "RSA"
  rsa_bits    = 4096
}

resource "azurerm_linux_virtual_machine" "vm" {
    resource_group_name = "${var.resource_group}"
    location            = "${var.location}"
    name                = "${var.application_type}-${var.resource_type}"
    
    
    size                = "Standard_B1s"
    admin_username      = "azureuser"
    network_interface_ids = [azurerm_network_interface.nic.id,]
    admin_ssh_key {
        username   = "admin"
        public_key = tls_private_key.Azuredevops.public_key_openssh
    }
    os_disk {
        caching           = "ReadWrite"
        storage_account_type = "Standard_LRS"
    }
    source_image_reference {
        publisher = "Canonical"
        offer     = "UbuntuServer"
        sku       = "18.04-LTS"
        version   = "latest"
    }
}