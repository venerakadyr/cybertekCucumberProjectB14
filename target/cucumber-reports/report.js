$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google related verifications",
  "description": "  Agile story: User stories, acceptance criteria\n  Basically we can pass here any additional information related to this features file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Google verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on google homepage",
  "keyword": "When "
});
formatter.match({
  "location": "Google_StepDefs.user_is_on_google_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see title contains Google",
  "keyword": "Then "
});
formatter.match({
  "location": "Google_StepDefs.user_should_see_title_contains_Google()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Title verification is PASSED\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat steps_definitions.google_stepDefs.Google_StepDefs.user_should_see_title_contains_Google(Google_StepDefs.java:27)\n\tat ✽.User should see title contains Google(src/test/resources/features/google.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});