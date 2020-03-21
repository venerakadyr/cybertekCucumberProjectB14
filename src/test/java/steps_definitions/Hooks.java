package steps_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver_Utils;
import utilities.ExtentReport_Utils;
import utilities.Log_Utils;
import utilities.TempStorage;

public class Hooks {
    @Before
    public  void setup(Scenario scenario){
        //Anything before each scenario
//       Driver.getDriver().get("https://www.google.com");
        TempStorage.clear();
        Log_Utils.start(scenario.getName());
        ExtentReport_Utils.startTest(scenario.getName());
    }





    @After
    public void tearDown(Scenario scenario){
      if(scenario.isFailed()){
          byte [] screenshot=((TakesScreenshot) Driver_Utils.getDriver()).getScreenshotAs(OutputType.BYTES);
          scenario.embed(screenshot,"image/png");
          ExtentReport_Utils.fail();

      }else {
          ExtentReport_Utils.pass();

      }

 Driver_Utils.closeDriver();

    }
}
