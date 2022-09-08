# #!/usr/bin/env python
from selenium import webdriver
from selenium.webdriver.common.by import By

# Start the browser and navigate to http://automationpractice.com/index.php.
driver = webdriver.Chrome("C:/Users/m.rahman/Downloads/chromedriver_win32_105/chromedriver.exe")
url='http://automationpractice.com/index.php'
search_item="T SHIRT"
print("Navigating to "+ url)
driver.get(url)
print("Searcing item for "+search_item)
driver.find_element(By.ID,"search_query_top").send_keys(search_item)
driver.find_element(By.NAME,"submit_search").click()
our_search=driver.find_element(By.CSS_SELECTOR,"div[id='center_column'] > h1 > span.lighter").text
assert "T SHIRT" in our_search
print("We are on th search page for "+our_search)
result=driver.find_element(By.CSS_SELECTOR,"div[id='center_column'] > h1 > span.heading-counter").text
if "1" in result:
    print(result+" is accurate")
else:
     print(result+" is showing wrong result")

