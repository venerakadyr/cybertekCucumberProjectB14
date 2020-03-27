$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/api_features/teacherDetailsE2E.feature");
formatter.feature({
  "name": "Teacher Details End to End  for UI vs API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "UI vs API cross data validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@e2eUIvsAPI"
    }
  ]
});
formatter.step({
  "name": "user gets teacher  \"\u003cresources\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user goes to cybertek training  app",
  "keyword": "And "
});
formatter.step({
  "name": "user opens teacher profile details page \"\u003cteacherId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user cross validations details on API vs Ui",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "resources",
        "teacherId"
      ]
    },
    {
      "cells": [
        "/teacher/2794",
        "2794"
      ]
    }
  ]
});
formatter.scenario({
  "name": "UI vs API cross data validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@e2eUIvsAPI"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user gets teacher  \"/teacher/2794\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Teacher_dataValidation_UI_API.user_gets_teacher(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to cybertek training  app",
  "keyword": "And "
});
formatter.match({
  "location": "Teacher_dataValidation_UI_API.user_goes_to_cybertek_training_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens teacher profile details page \"2794\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Teacher_dataValidation_UI_API.user_opens_teacher_profile_details_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cross validations details on API vs Ui",
  "keyword": "And "
});
formatter.match({
  "location": "Teacher_dataValidation_UI_API.user_cross_validations_details_on_API_vs_Ui()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//h3)[2]\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENERAs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1067:6807:b875:efac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/vp/bz0x1t056t5...}, goog:chromeOptions: {debuggerAddress: localhost:50282}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a59708f440381d51ffe612a223625c6d\n*** Element info: {Using\u003dxpath, value\u003d(//h3)[2]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy34.getText(Unknown Source)\n\tat steps_definitions.api_stepDefs.Teacher_dataValidation_UI_API.user_cross_validations_details_on_API_vs_Ui(Teacher_dataValidation_UI_API.java:43)\n\tat ✽.user cross validations details on API vs Ui(src/test/resources/features/api_features/teacherDetailsE2E.feature:9)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});