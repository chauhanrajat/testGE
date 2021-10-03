"use strict";
/**
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const angularHomepage_1 = require("./pageObjects/angularHomepage");
const calculator_1 = require("./pageObjects/calculator");
describe('writing a test for chain locators', () => {
    let calc = new calculator_1.calculator();
    it('chain locators', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calc.firstEditBox.sendKeys("7");
        yield calc.secondEditBox.sendKeys("4");
        yield calc.go.click();
        //jasmine takes care of promise resolving.
        calc.getResult.getText().then(function (text) {
            protractor_1.browser.sleep(5000);
            console.log(text);
        });
    }));
    it('working on angular js page', () => __awaiter(void 0, void 0, void 0, function* () {
        let ajs = new angularHomepage_1.angularHome();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield ajs.angularLink.click();
        yield ajs.search.sendKeys("chauhan");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdHNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCwyQ0FBcUM7QUFFckMsbUVBQTREO0FBQzVELHlEQUFzRDtBQUV0RCxRQUFRLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxFQUFFO0lBRWxELElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRTVCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFTLEVBQUU7UUFDL0IsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUt2QyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUUzQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7UUFFM0MsSUFBSSxHQUFHLEdBQUcsSUFBSSw2QkFBVyxFQUFFLENBQUM7UUFFNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBSXRDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSCxDQUFDLENBQUMsQ0FBQSJ9