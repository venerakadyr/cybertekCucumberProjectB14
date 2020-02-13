$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/vytrack_features/createCalendarEvent.feature");
formatter.feature({
  "name": "Activities Module: Create Calendar Events Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CCEP"
    }
  ]
});
formatter.scenario({
  "name": "Verify Default Fields for Create Calendar Events Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CCEP"
    },
    {
      "name": "@defaultFieldsCCEP"
    }
  ]
});
formatter.step({
  "name": "the user is signed in as a sale manager",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user is on the All Calendar Events page under the Activities tab",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user is taken to the Create Calendar Events page after clicking the Create Calendar Event button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should see their name as the default value of of the owner field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should see the title field to be empty by default",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should see the start date field with the default value of the current date",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should see the start time field with the default value of the current time",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});