# #!/usr/bin/env python
from lib2to3.pgen2 import driver
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.by import By
import logging

logging.basicConfig(filename="C:/logs/selenium/selenium_ui.log",format='%(asctime)s %(message)s',filemode='w') #/var/log/selenium/ui.log
logger=logging.getLogger()
logger.setLevel(logging.INFO)
# Start the browser and login with standard_user
def login (user, password):
    print ('Starting the browser...')
    # --uncomment when running in Azure DevOps.
    # options = ChromeOptions()
    # options.add_argument("--headless") 
    # driver = webdriver.Chrome(options=options)  

    driver = webdriver.Chrome("C:/Users/m.rahman/Downloads/chromedriver_win32_105/chromedriver.exe")
    print ('Browser started successfully. Navigating to the demo page to login.')
    driver.get('https://www.saucedemo.com/')

    #login('standard_user', 'secret_sauce')
    driver.find_element(By.CSS_SELECTOR,"input[id='user-name']").send_keys(user)
    driver.find_element(By.CSS_SELECTOR,"input[id='password']").send_keys(password)
    driver.find_element(By.ID,"login-button").click()
    logging.info ('Logged in as user ' + user)

    return driver
#adding all the items to shoping cert
def adding_product_to_cart(driver):
    item_count = 0
    product_label = driver.find_element(By.CSS_SELECTOR,("div[class='header_secondary_container'] > span.title")).text
    print(product_label)
    if "PRODUCTS" in product_label:
        inventory_items = driver.find_elements(By.CLASS_NAME, "inventory_item")
        for inventory_item in inventory_items:
            item_name=inventory_item.find_element(By.CSS_SELECTOR,"div[class='inventory_item_name']").text
            add_button=inventory_item.find_element(By.CSS_SELECTOR,"button[class='btn btn_primary btn_small btn_inventory']")
            add_button.click()
            item_count +=1
            print(item_name+ "added to the cart")
            logging.info(item_name+ "added to the cart")
        print("Total "+str(item_count)+ " items added to the cart")
        logging.info("Total "+str(item_count)+ " items added to the cart")
    return driver
#removing all items from shoping cert
def removing_items_from_cert(driver):
    #first open cert by clicking button
    driver.find_element(By.CSS_SELECTOR,"a[class='shopping_cart_link']").click()
    print('Opened cart')
    logging.info('Opened cart')
    #removing item one by one
    items=driver.find_elements(By.CLASS_NAME, "cart_item")
    for item in items:
        item_name=item.find_element(By.CSS_SELECTOR,"div[class='inventory_item_name']").text
        button = item.find_element(By.CSS_SELECTOR,"button[class='btn btn_secondary btn_small cart_button']")
        button.click()
        print(item_name+'  Removed', )
        logging.info(item_name+'  Removed')
        #return to the main page
        logging.info("Retun to the main page") 
    driver.find_element(By.ID,"continue-shopping").click()
    return driver

if __name__ == "__main__":
    N_ITEMS = 6
    test_User = 'standard_user'
    test_Pass = 'secret_sauce'
 
    driver = login(test_User, test_Pass)
    print(test_User + "loggedin into the system")
    adding_product_to_cart(driver=driver)
    removing_items_from_cert(driver=driver)
    #Closing browser
    driver.quit()
    print('Exited the browser')
    logging.info('Exited the browser')
