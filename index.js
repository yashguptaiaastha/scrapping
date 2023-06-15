const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp"
    });
    const page = await browser.newPage();
    await page.goto("https://www.amazon.in/All-Mobile-Phones/s?k=All+Mobile+Phones");
    
    let result = [];
    productsHandles = await page.$$(".s-main-slot.s-result-list.s-search-results.sg-row > div > div ");
    console.log(productsHandles);
    for (let product of productsHandles){
        try {

            const title = await page.evaluate(
            (el) => el.querySelector(" h2 > a > span").textContent, product);

            console.log(title)
    
        
            let price = await page.evaluate(
            (el) => el.querySelector(".a-price-whole").textContent, product);

            console.log(price);

            let rating = await page.evaluate(
                (el) => el.querySelector(".a-icon.a-icon-star-small.a-star-small-4-5.aok-align-bottom").textContent, product);
    
                console.log(rating);
                console.log(result.append(title,price,rating));
        
        }
        catch (error){}
        //console.log(title)
       

    }
    await browser.close();
})
();