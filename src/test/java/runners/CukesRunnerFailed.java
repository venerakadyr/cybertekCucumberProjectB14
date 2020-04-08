package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(


        plugin={"pretty" , "html:target/default-cucumber-reports2",
                "json:target/cucumber2.json", "junit:target/cucumber2.xml" },
        features = "@target/rerun.txt",
         glue= "step_definitions"

)
public class CukesRunnerFailed {

}
