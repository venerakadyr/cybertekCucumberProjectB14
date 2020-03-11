$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear_features/smartBearLogin.feature");
formatter.feature({
  "name": "Smartbear login feature verifications",
  "description": "  Agile Story: When user is on the login page of SmartBear app user should\n  be able to login using correct test data\n  A/C:\n\n  1- Only authenticated user should be able to login\n  Link: http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx\n  Authenticated test data:\n  Username: Test\n  Password: tester\n  2- User should see \"Welcome, Tester!\" displayed when logged in.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I should be able to login using authenticated test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@positiveLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SmartBear login page",
  "keyword": "When "
});
formatter.match({
  "location": "SB_StepDefs.user_is_on_SmartBear_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct username",
  "keyword": "And "
});
formatter.match({
  "location": "SB_StepDefs.user_enters_correct_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct password",
  "keyword": "And "
});
formatter.match({
  "location": "SB_StepDefs.user_enters_correct_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to login button",
  "keyword": "And "
});
formatter.match({
  "location": "SB_StepDefs.user_clicks_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in and be able to verify Welcome text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SB_StepDefs.user_should_be_logged_in_and_be_able_to_verify_Welcome_text_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});