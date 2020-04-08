package step_definitions;

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
        //Anything that you want to run before each scenario
        //we pass parameter Scenario scenario, it will start before each Scenario
        //scenario.getName() getting the name of scenario from feature file and start
        Log.start(scenario.getName());
        //connecting to utility and will start the log
        ExtentReport.startTest(scenario.getName());
        TempStorage.clear();
        //       Driver.getDriver().get("https://www.google.com");
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
