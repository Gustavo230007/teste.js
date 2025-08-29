const { Builder, Key, By, error } = require("selenium-webdriver");
const express =  require("express");
const app = express();
const port = 3000 // porta que o programa vai ouvir

require("chromedriver")


async function teste() {


    
    let driver = await new Builder().forBrowser("chrome").build();

    const url = await driver.get("https://www.amazon.com.br/PUMA-GOLF-masculino-Fusion-azul-marinho/dp/B0BJH1HL26/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VEQOM6R3W8TY&dib=eyJ2IjoiMSJ9.2w63ZL5OKy3RDxch6o0QK5W9rxSLCfRHnAQKE2xhMAQdP0IlHCCymhq-3fFMNO-d0LJAWmPNOpcnQ-6sECOhJqJOCfHhPuqhbdB-BuEBOqtC7Dh_3Dex5XHmi1KsFLfTGaDDj-jE6V0FBNa3YTy1uuzSgwjDEQj4lrijKdg8N9blK7Q_KJEAvnoVHSVUkyL2zMUmoaz7S48PGA9x1TxHMDDa9njrye-D8pedSj4TzIxCYVONFjOM5dpdb-M-oBKexHhpQNEYmdOxgnRNcIdWlZNHjzDLmGpeK4LHj-EC8ZA.srFEmc0GQU15kT67SmdaG34caVtixty4dBBiQ6VGiZY&dib_tag=se&keywords=puma+golf+fusion+grip+extra+largo+azul+marinho&qid=1755519914&sprefix=puma+golf+fusion+grip+extra+largo+azul+marinho%2Caps%2C193&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147")



    let titulo = await driver.findElement(By.id("title")).getText();

    let preco = await driver.findElement(By.css(".a-price")).getText();

    let img = await driver.findElement(By.id("landingImage")).getAttribute("src");



    const obj = {
        titulo: titulo,
        preco: preco,
        img: img,

    }


    console.log(obj)

     
    driver.quit();


}

teste();

app.get("/products", async(req, res) => {
    const url = req.query.url;
    res.json(obj)

})


app.listen(port, () => {
    console.log(`o servidor ta na porta ${port}`)
})

try {
    urlIsperada = "https://www.amazon.com.br/PUMA-GOLF-masculino-Fusion-azul-marinho/dp/B0BJH1HL26/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VEQOM6R3W8TY&dib=eyJ2IjoiMSJ9.2w63ZL5OKy3RDxch6o0QK5W9rxSLCfRHnAQKE2xhMAQdP0IlHCCymhq-3fFMNO-d0LJAWmPNOpcnQ-6sECOhJqJOCfHhPuqhbdB-BuEBOqtC7Dh_3Dex5XHmi1KsFLfTGaDDj-jE6V0FBNa3YTy1uuzSgwjDEQj4lrijKdg8N9blK7Q_KJEAvnoVHSVUkyL2zMUmoaz7S48PGA9x1TxHMDDa9njrye-D8pedSj4TzIxCYVONFjOM5dpdb-M-oBKexHhpQNEYmdOxgnRNcIdWlZNHjzDLmGpeK4LHj-EC8ZA.srFEmc0GQU15kT67SmdaG34caVtixty4dBBiQ6VGiZY&dib_tag=se&keywords=puma+golf+fusion+grip+extra+largo+azul+marinho&qid=1755519914&sprefix=puma+golf+fusion+grip+extra+largo+azul+marinho%2Caps%2C193&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147"
    if (url !== urlIsperada) {
        throw new error ("url diferente da esperada")
    }

    console.log("tudo certo pode continuar ")

} catch {
    console.error("url errada")
}