package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import utilities.ExtentReport_Utils;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin={"html:target/cucumber-reports", "json:target/cucumber-report.json"},
        features = "src/test/resources/features",
        glue= "steps_definitions",
        dryRun =false,
        tags="@e2eUIvsAPI"

)

public class CukesRunner {
    @AfterClass
    public static void tearDown(){
        ExtentReport_Utils.endReport();
    }













}
