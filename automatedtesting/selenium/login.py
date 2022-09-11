# #!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.by import By


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
    product_label = driver.find_element(By.CSS_SELECTOR,("div[class='product_label']")).text
    print(product_label)


if __name__ == "__main__":
    N_ITEMS = 6
    test_User = 'standard_user'
    test_Pass = 'secret_sauce'
    driver = login(test_User, test_Pass)
