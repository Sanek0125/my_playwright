const { chromium } = require('playwright');

function getNumberFromString(string) {
    return Number(string.replace(/[^\d]/gi, ''));
}

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage();

  await page.goto('https://twitter.com/webstandards_ru');

  await page.waitForSelector(`text=/^Followers$/i`);

  const span = await page.$(`text=/^Followers$/i`);

  await page.screenshot({path: 'screenshot3.png'});

    
  const followers = await page.evaluate(async span => {
    
    return span.parentNode.parentNode.getAttribute('title');
  }, span);

//   console.log(result); // prints "56"
  

  await browser.close();

//   console.log(span);
  console.log(getNumberFromString(followers));
  
})();

// console.log(span);