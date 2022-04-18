const puppeteer = require("puppeteer");
const mail = "jasox20082@bamibi.com";
const key = "stark001";

let browserPromise = puppeteer.launch({ headless: false });
let page;
browserPromise.then(function(browser){
    console.log("browser is opened");
    let newPromise  = browser.newPage();
    return newPromise;
}).then(function(pageInstance){
    console.log("new tab opened");
    page = pageInstance;
    let goToLink = page.goto("https://www.hackerrank.com/");
    return goToLink;
}).then(function(){
    console.log("hacker rank is opened");
    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function(){
    let clickPromise = page.click("ul.menu a");
    return clickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return waitPromise;

}).then(function(){
    let clickPromise = page.evaluate(function(){
        let btn = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btn[1].click();
        return;
    })
    return clickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function(){
    let mailTypePromise = page.type("#input-1",mail,{delay:100});
    return mailTypePromise;
}).then(function(){
    let keyTypePromise = page.type("#input-2",key,{delay:100});
    return keyTypePromise;
}).then(function(){
    let clickPromise = page.click('button[data-analytics="LoginPassword"]');
    return clickPromise;
}).then(function(){
    console.log("succesfully loged in hacker rank ");
    return page.waitForSelector('[data-automation="algorithms"]');
}).then(function(){
    let clickPromise = page.click('[data-automation="algorithms"]');
    return clickPromise;
}).then(function(){
    return page.waitForSelector('[value="warmup"]');
}).then(function(){
    let clickPromise = page.click('[value="warmup"]');
    return clickPromise;
})