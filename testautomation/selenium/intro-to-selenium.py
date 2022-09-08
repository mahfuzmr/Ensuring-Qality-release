# #!/usr/bin/env python
from selenium import webdriver

# Start the browser and navigate to http://automationpractice.com/index.php.
driver = webdriver.Chrome("C:/Users/m.rahman/Downloads/chromedriver_win32_105/chromedriver.exe")
driver.get('http://automationpractice.com/index.php')
driver.find_element_by_css_selector("input[id='search_query_top']").send_keys("t shirt")
driver.find_element_by_css_selector("button[class='btn btn-default button-search']").click()