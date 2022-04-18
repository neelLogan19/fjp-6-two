//
const puppeteer = require("puppeteer");

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     await page.screenshot({ path: 'example.png' });
  
//     await browser.close();
//   })();

// const browserPromise = puppeteer.launch({ headless: false});//headless false is given so that the browser is visble

// browserPromise.then(function(browserInstance){
//     console.log("browser is opened");
//     // const newTab = browserInstance.newPage();---> to open a new tab
// })

const browserPromise = puppeteer.launch( {headless: false } );

browserPromise.then(function(browserInstance){
    console.log("browser is opened");
    const newLink = browserInstance.newPage();
    return newLink;
}).then(function(browser){
    const pageLink = browser.goto("https://www.google.com/");
    return pageLink;
}).then(function(){
    console.log("google is opened");
})