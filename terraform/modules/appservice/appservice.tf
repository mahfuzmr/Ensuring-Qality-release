resource "azurerm_app_service_plan" "app_serviceplan" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"

  sku {
    tier = "Free"
    size = "F1"
  }
}

resource "azurerm_app_service" "app_service" {
  name                = "${var.application_type}-${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"
  app_service_plan_id = azurerm_app_service_plan.app_serviceplan.id

  app_settings = {
    "WEBSITE_RUN_FROM_PACKAGE" = 0
  }
 
}