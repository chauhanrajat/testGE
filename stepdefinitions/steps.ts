
import{Given,When,Then} from "cucumber";
import { browser } from "protractor";
import { angularHome } from "../pageObjects/angularHomepage";
import { calculator } from "../pageObjects/calculator";
import chai from "chai";
var expect=chai.expect;
Given('I ll laucnh the {string} website', async(string)=> {
    // Write code here that turns the phrase above into concrete actions
    if(string=="calc"){
    await browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if(string=="angular"){
        await browser.get("https://angularjs.org/");
    }
    
  });


  When('I ll enter two numbers {string} and {string}', async(string, string2)=> {
let cl= new calculator();
//await browser.sleep(5000);
await cl.firstEditBox.sendKeys(string);
await cl.secondEditBox.sendKeys(string2);

    // Write code here that turns the phrase above into concrete actions
   
  });
  

  When('I ll click on the angular link', async()=> {
    let  ajs= new angularHome();
    await ajs.angularLink.click();
  });

  Then('output should be {string}', async(string)=> {
    let calc= new calculator();
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {

            expect(text).to.equal(string);

		})
         });

 Then('i ll enter {string} in the search box', async(string)=> {
            let  ajs= new angularHome();
            await ajs.search.sendKeys(string);
          });
  