$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear_features/smartbearOrder.feature");
formatter.feature({
  "name": "Smartbear order placing feature",
  "description": "  Agile Story : When user is on the Order page, user should be able to place\n  order after filling out the form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects \"\u003cproduct\u003e\" from product dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cquantity\u003e\" to quantity input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccustomerName\u003e\" to costumer name input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstreet\u003e\" to street input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccity\u003e\" to city input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstate\u003e\" to state input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003czip\u003e\" to zip input box",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003ccardType\u003e\" as card type from radio buttons",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccardNumber\u003e\" to card number input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cexpirationDate\u003e\" to expiration date into input box",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies \"\u003cexpectedName\u003e\" is in the table",
  "keyword": "Then "
});
formatter.examples({
  "name": "User fills out the form as followed from the table below:",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "customerName",
        "street",
        "city",
        "state",
        "zip",
        "cardType",
        "cardNumber",
        "expirationDate",
        "expectedName"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "Il",
        "60004",
        "Visa",
        "313313133315",
        "12/22",
        "Ken Adams"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "4",
        "Joey Tribbiani",
        "State st",
        "Chicago",
        "Il",
        "60656",
        "Visa",
        "313313133315",
        "11/22",
        "Joey Tribbiani"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "5",
        "Rachel Green",
        "Michigan st",
        "Chicago",
        "Il",
        "60656",
        "Visa",
        "313313133315",
        "11/22",
        "Rachel Green"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "5",
        "Chandler Bing",
        "Erie st",
        "Chicago",
        "Il",
        "60666",
        "Visa",
        "464675855959",
        "10/22",
        "Chandler Bing"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "9",
        "Dr DrakeRamoray",
        "Dale st",
        "Arl Hgths",
        "Il",
        "60452",
        "Visa",
        "137452095511",
        "10/22",
        "Dr DrakeRamoray"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "10",
        "Monica Geller",
        "Euclid ave",
        "Arl Hgths",
        "Il",
        "60312",
        "Visa",
        "874576638100",
        "10/22",
        "Monica Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "3",
        "Ross Geller",
        "River rd",
        "Des Plaines",
        "Il",
        "60666",
        "Visa",
        "383494859454",
        "10/22",
        "Ross Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "Il",
        "60312",
        "Visa",
        "949586573625",
        "12/22",
        "Ken Adams"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60004\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"4\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Joey Tribbiani\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"State st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60656\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Joey Tribbiani\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Rachel Green\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Michigan st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60656\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Rachel Green\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027ctl00_MainContent_orderGrid\u0027]/tbody/tr[2]/td[2]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\n\tat steps_definitions.smartbear_stepDefs.SBOrder_StepDefs.user_verifies_is_in_the_table(SBOrder_StepDefs.java:86)\n\tat ✽.User verifies \"Rachel Green\" is in the table(src/test/resources/features/smartbear_features/smartbearOrder.feature:18)\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat steps_definitions.Hooks.tearDown(Hooks.java:22)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat steps_definitions.Hooks.setup(Hooks.java:13)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"5\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Chandler Bing\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Erie st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"60666\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"464675855959\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies \"Chandler Bing\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat steps_definitions.Hooks.tearDown(Hooks.java:22)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat steps_definitions.Hooks.setup(Hooks.java:13)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"9\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Dr DrakeRamoray\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Dale st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"60452\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"137452095511\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies \"Dr DrakeRamoray\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat steps_definitions.Hooks.tearDown(Hooks.java:22)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat steps_definitions.Hooks.setup(Hooks.java:13)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"10\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Monica Geller\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Euclid ave\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"60312\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"874576638100\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies \"Monica Geller\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat steps_definitions.Hooks.tearDown(Hooks.java:22)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat steps_definitions.Hooks.setup(Hooks.java:13)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"3\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Ross Geller\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"River rd\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Des Plaines\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"60666\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"383494859454\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies \"Ross Geller\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat steps_definitions.Hooks.tearDown(Hooks.java:22)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat steps_definitions.Hooks.setup(Hooks.java:13)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"1\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"60312\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"949586573625\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:807:735e:613f:ee7e%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50008}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d249b4ef38d9c43bba9592bc7de8e5f5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat steps_definitions.Hooks.tearDown(Hooks.java:22)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});