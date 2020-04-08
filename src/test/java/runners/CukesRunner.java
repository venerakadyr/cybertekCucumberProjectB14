package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import utilities.ExtentReport;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin={"html:target/default-cucumber-reports",
                "json:target/default-cucumber1.json",
                "rerun:target/rerun.txt"
        },
        features = "src/test/resources/features",
        glue= "step_definitions",
        dryRun =false,
        tags="@etsy2"

)

public class CukesRunner {
    @AfterClass
    public static void tearDownee(){
        ExtentReport.endReport();
    }













}
