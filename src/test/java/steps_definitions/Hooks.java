package steps_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;
import utilities.ExtentReport;
import utilities.Log;
import utilities.TempStorage;

public class Hooks {
    @Before
    public  void setup(Scenario scenario){
        //Anything before each scena rio
//       Driver.getDriver().get("https://www.google.com");
        TempStorage.clear();
        Log.start(scenario.getName());
        ExtentReport.startTest(scenario.getName());
    }





    @After
    public void tearDown(Scenario scenario){
      if(scenario.isFailed()){
          byte [] screenshot=((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
          scenario.embed(screenshot,"image/png");
          ExtentReport.fail();

      }else {
          ExtentReport.pass();

      }

 Driver.closeDriver();

    }
}
