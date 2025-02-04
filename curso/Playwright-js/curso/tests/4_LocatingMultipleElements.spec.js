import {test, expect} from '@playwright/test'

test('LocatingMultipleElements', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');
    /*
    const links = await page.$$('a');

    for(const link of links){

        let linktext = await link.textContent();
        console.log(linktext);
    }*/


    // Esperar a que los elementos estén visibles
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    //busco los a dentro de los h4 dentro de los div dentro del div con id tbodyid, tambien puede ser #tbodyid h4 a
    
    // Seleccionar todos los nombres de productos
    const productos = await page.$$("//div[@id='tbodyid']//div//h4/a");

    console.log("Lista de productos disponibles:");

    for (const producto of productos) {
        let prodName = await producto.textContent();
        console.log(prodName);
    }
})
