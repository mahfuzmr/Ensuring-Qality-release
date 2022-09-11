resource "azurerm_network_interface" "test" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"

  ip_configuration {
    name                          = "internal"
    subnet_id                     = "${var.subnet_id}"
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = "${var.public_ip}"
  }
}
resource "tls_private_key" "example_ssh" {
    algorithm = "RSA"
    rsa_bits = 4096
}
resource "azurerm_linux_virtual_machine" "test" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"
  size                = "Standard_B1s"
  admin_username      = "mahfuzur"
  network_interface_ids = [azurerm_network_interface.test.id,]
  admin_ssh_key {
    username   = "mahfuzur"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDEJOA6iRkV/r6xLGTZuEMIvALoZXsNJ7ycbic6S9VUbrdbO25TTMEMWcHV4hB66GpgZpkmB4XgLLv50/RrbHN6l/ThJrF5ebj0rWyVpde79ZSz/1JBXOr4fYp7zCEbtPGKW8Jw8FQB82uFq3aHbXATlXh0r0tQrnFBUHUcBKlDFO0ugDrIUZ80du0BafhaXl2lnd3qKba9rNkwqsoxhAL6hiAUxx10KvFdSSdrnHwZy64KVBgvg264KqB3Yfr78PHJxwQwMXxr8/CwFPDB5OyVLDg2ZwHoVHE6570fKSzGD6Sm6RPOsU2WuXJGGv9XQ79NkrS87udJnMZ7/jICGW/U3H+0ap7fumlvvMXih65fTn/fKNciztcH8QOoUdNCs5KK4hoDuXUe+98KeA4dkXkxYw+AIZt/cI8cLtBIEZDLxktQ3XFhjDeFwRTzz+aVNUiIaRAwQOl2LjYFhexMeyK975M5dsQU640CFX7evwdX61jDWsgPd8DgJghGfR3iUx/5JNaJ4Qz6bpC0LP0PgbwLkB/jS1KNv84XcEOxFTcNGW4dsWtbEM+ArR/EcW3PX685GyfkhkHYde11FuzmT4CTGcFVnV11aBIUXAJM7tCpEuyjVXRc8t8urTO4wxlTFoEo65OWG1JDveBJZ7ijctF3htGWBjfsRSMVqzXafKe0aw== mahfuzur@cc-fac25d87-66fbc57944-ttk5q"
    #file("./id_rsa.pub") 
    #public_key = tls_private_key.example_ssh.public_key_openssh #The magic was here   
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