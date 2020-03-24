$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/api_features/teacherE2E_withNameValidation_UIvsAPI.feature");
formatter.feature({
  "name": "Validation of the teacher name UI vs API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "UI vs API cross data validation with name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@e2eName"
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
  "name": "user searches for teacher with name \"\u003cteacherName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user cross validations details on API vs UI with \"\u003cteacherName\u003e\"",
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
        "teacherName"
      ]
    },
    {
      "cells": [
        "/teacher/name/Rahul",
        "Rahul"
      ]
    }
  ]
});
formatter.scenario({
  "name": "UI vs API cross data validation with name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@e2eName"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user gets teacher  \"/teacher/name/Rahul\"",
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
  "name": "user searches for teacher with name \"Rahul\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TeacherNameValidation_UI_API_stepDefs.user_searches_for_teacher_with_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cross validations details on API vs UI with \"Rahul\"",
  "keyword": "And "
});
formatter.match({
  "location": "TeacherNameValidation_UI_API_stepDefs.user_cross_validations_details_on_API_vs_UI_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});