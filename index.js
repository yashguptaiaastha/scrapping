const puppeteer = require('puppeteer');

async function run()  {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.amazon.in/All-Mobile-Phones/s?k=All+Mobile+Phones');
    
    const html = await page.content();
    console.log(html);
   
    const title=await page.evaluate(() => document.title);
    console.log(title);
    const text = await page.evaluate(() => document.body.innerText);
    console.log(text);
    //const rating = await page.evaluate(() => rating);
    //console.log(rating);
    

   await browser.close();
} 

run();