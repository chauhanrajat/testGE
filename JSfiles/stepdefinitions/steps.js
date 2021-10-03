"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const angularHomepage_1 = require("../pageObjects/angularHomepage");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
(0, cucumber_1.Given)('I ll laucnh the {string} website', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if (string == "angular") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
(0, cucumber_1.When)('I ll enter two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    let cl = new calculator_1.calculator();
    //await browser.sleep(5000);
    yield cl.firstEditBox.sendKeys(string);
    yield cl.secondEditBox.sendKeys(string2);
    // Write code here that turns the phrase above into concrete actions
}));
(0, cucumber_1.When)('I ll click on the angular link', () => __awaiter(void 0, void 0, void 0, function* () {
    let ajs = new angularHomepage_1.angularHome();
    yield ajs.angularLink.click();
}));
(0, cucumber_1.Then)('output should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let calc = new calculator_1.calculator();
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
(0, cucumber_1.Then)('i ll enter {string} in the search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let ajs = new angularHomepage_1.angularHome();
    yield ajs.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBd0M7QUFDeEMsMkNBQXFDO0FBQ3JDLG9FQUE2RDtBQUM3RCwwREFBdUQ7QUFDdkQsZ0RBQXdCO0FBQ3hCLElBQUksTUFBTSxHQUFDLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsSUFBQSxnQkFBSyxFQUFDLGtDQUFrQyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDckQsb0VBQW9FO0lBQ3BFLElBQUcsTUFBTSxJQUFFLE1BQU0sRUFBQztRQUNsQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDOUQ7U0FDSSxJQUFHLE1BQU0sSUFBRSxTQUFTLEVBQUM7UUFDdEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBRUgsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILElBQUEsZUFBSSxFQUFDLDhDQUE4QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQy9FLElBQUksRUFBRSxHQUFFLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQ3pCLDRCQUE0QjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckMsb0VBQW9FO0FBRXRFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQyxnQ0FBZ0MsRUFBRSxHQUFPLEVBQUU7SUFDOUMsSUFBSyxHQUFHLEdBQUUsSUFBSSw2QkFBVyxFQUFFLENBQUM7SUFDNUIsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQywyQkFBMkIsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQy9DLElBQUksSUFBSSxHQUFFLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzNCLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV4QyxDQUFDLENBQUMsQ0FBQTtBQUNLLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFWCxJQUFBLGVBQUksRUFBQyx1Q0FBdUMsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQ2xELElBQUssR0FBRyxHQUFFLElBQUksNkJBQVcsRUFBRSxDQUFDO0lBQzVCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9