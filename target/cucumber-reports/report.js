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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});