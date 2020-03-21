$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/etsy_features/etsy.feature");
formatter.feature({
  "name": "Etsy search functionality",
  "description": "  CBT-25 Agile Story; can be placed here",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is already on Etsy home page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Etsy home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Etsy_StepDefs.user_is_on_Etsy_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Etsy search title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@etsy2"
    }
  ]
});
formatter.step({
  "name": "user search for \"balloon\"",
  "keyword": "When "
});
formatter.match({
  "location": "Etsy_StepDefs.user_search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see \"Balloon\" in Etsy title",
  "keyword": "Then "
});
formatter.match({
  "location": "Etsy_StepDefs.user_should_see_in_Etsy_title(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat steps_definitions.etsy_stepDefs.Etsy_StepDefs.user_should_see_in_Etsy_title(Etsy_StepDefs.java:49)\n\tat ✽.User should see \"Balloon\" in Etsy title(src/test/resources/features/etsy_features/etsy.feature:28)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});