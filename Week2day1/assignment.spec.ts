/* Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Webkit browser instance and verify the page title and URL.
Preconditions:
1. Use Playwright to launch Edge and Webkit.
2. Create two separate browser instances.
3. Use the following URLs: o Red Bus: https://www.redbus.in o Flipkart:
https://www.flipkart.com
Requirements:
• Red Bus (Edge): o Load the home page and print the page title and current URL.
Flipkart (Webkit): o Load the home page and print the page title and current URL.
Hints:
• Use page.title() to retrieve the page title.
• Use page.url() to retrieve the current page URL.
 */

import {test,chromium, webkit, expect} from '@playwright/test'
test('Login multiple context', async ()=>
{
    //chromium edge launch for redbus
    
  const browser= await chromium.launch({channel:"msedge", headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.redbus.in/");
  const title = await page.title();
  console.log(title);
  const url = page.url();
  console.log(url);

  //webkit launch for flipkart
  const browser1= await webkit.launch({headless:false});
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://www.flipkart.com/");
  const title1 = await page1.title();
  console.log(title1);
  const url1 = page1.url();
  console.log(url1);


})