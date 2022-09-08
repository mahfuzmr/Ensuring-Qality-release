# #!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.common.by import By

# Start the browser and navigate to http://automationpractice.com/index.php.
driver = webdriver.Chrome("C:/Users/m.rahman/Downloads/chromedriver_win32_105/chromedriver.exe")
driver.get('http://automationpractice.com/index.php')
driver.find_element(By.ID,"search_query_top").send_keys("t shirt")
driver.find_element(By.NAME,"submit_search").click()