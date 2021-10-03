"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Before)({ tags: "@calculatortesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.driver.manage().window().maximize();
});
(0, cucumber_1.Before)({ tags: "@angulartesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("executing angular js  site");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBc0M7QUFDdEMsMkNBQXFDO0FBS3JDLElBQUEsaUJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyxFQUFFO0lBQ25DLCtEQUErRDtJQUMvRCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM5QyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUEsaUJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQyxFQUFFO0lBQ2hDLHdFQUF3RTtJQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFFNUMsQ0FBQyxDQUFDLENBQUMifQ==