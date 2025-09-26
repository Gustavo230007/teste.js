const { Builder, Key, By, error } = require("selenium-webdriver");
const express =  require("express");
const app = express();
const port = 3000 // porta que o programa vai ouvir

require("chromedriver")


async function scrapeAmazon(driver, url) {
    await driver.get(url);

    let titulo = await driver.findElement(By.id("title")).getText();
    let preco = await driver.findElement(By.css(".a-price")).getText();
    let img = await driver.findElement(By.id("landingImage")).getAttribute("src");
    let description = await driver.findElement(By.css("#feature-bullets")).getText();
    let review = await driver.findElement(By.css(".a-size-base.a-nowrap")).getText();

    return { titulo, preco, img, description, review };
}

async function scrapeMercado_livre(driver, url) {
    let titulo = await driver.findElement(By.css("h1")).getText();
    let preco = await dfriver.findElement(By.css("src__BestPrice-sc-1jvw02c-5"))
    let img = await driver.findElement(By.css("img").getAttribute("src"));
    let description = await driver.findElement(By.css(".product-description")).getText(); 
    let review = "sem review no produto ainda."


    return {titulo, preco, img, description, review}

    
}



async function scrp_americanas(driver, url) {
    await driver.get(url)

    let titulo = await driver.findElement(By.css("h1")).getText();
    let preco = await driver.findElement(By.css(".src__BestPrice-sc-1jvw02c-5")).getText();
    let img = await driver.findElement(By.css("img")).getAttribute("src");
    let description = await driver.findElement(By.css(".product-description")).getText();
    let review = "Sem review implementado ainda";

    return { titulo, preco, img, description, review };


}


/**
 * @param {string} storeUrl 
 */
async function teste(storeUrl) {


    const url = await driver.get(storeUrl)

    const obj = {
        titulo: titulo,
        preco: preco,
        img: img,
        description: description,
        review:review,

    }


    async function scrp_lojas(url) {
        let driver = await new Builder().forBrowser("chrome").build();

         try {
        if (url.includes("amazon.com")) {
            return await scrapeAmazon(driver, url);
        } else if (url.includes("americanas.com")) {
            return await scrp_americanas(driver, url);
        } else {
            throw new Error("Loja não suportada ainda!");
        }
    } finally {
        driver.quit();
    }
}

        
   
     


}

///products/?url=link loja:



app.get("/products", async(req, res) => {
    const url = req.query.url;
    const response = await teste(url)
    res.json(response)

})

 try {
        const response = await scrapeLoja(url);
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    };


app.listen(port, () => {
    console.log(`o servidor ta na porta ${port}`)
})
