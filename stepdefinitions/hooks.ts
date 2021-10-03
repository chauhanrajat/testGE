import {After,Before} from "cucumber";
import { browser } from "protractor";




Before({tags: "@calculatortesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.driver.manage().window().maximize();
});

Before({tags: "@angulartesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log("executing angular js  site");
  
});