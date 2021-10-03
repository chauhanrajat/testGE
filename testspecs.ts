/**
 * 
 */

import { browser } from "protractor";
import { element, by } from "protractor";
import { angularHome } from "./pageObjects/angularHomepage";
import { calculator } from "./pageObjects/calculator";

describe('writing a test for chain locators', () => {

	let calc = new calculator();

	it('chain locators', async () => {
		await browser.get("http://juliemr.github.io/protractor-demo/");
		await calc.firstEditBox.sendKeys("7");
		await calc.secondEditBox.sendKeys("4");




		await calc.go.click();
		//jasmine takes care of promise resolving.
		calc.getResult.getText().then(function (text) {

			browser.sleep(5000);
			console.log(text);
		})
	})

	it('working on angular js page', async () => {

		let ajs = new angularHome();

		await browser.get("https://angularjs.org/");
		await ajs.angularLink.click();
		await ajs.search.sendKeys("chauhan");



	})

})