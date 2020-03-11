package utilities;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Logger;

public class TestLogs {
    public static void main(String[] args) {
//        Logger logger= (Logger) LogManager.getLogger(TestLogs.class);
//        System.out.println("Some test execution started");
//        System.out.println("going to dzone.com");
//        logger.info("on dzone.com");
//        System.out.println("Click on loggin button");
//        logger.warn("Login in to application");

//        System.out.println("Test started");
//       Log.start("Etsy search title verification");

//        =================================================

        ExtentHtmlReporter configs=new ExtentHtmlReporter("./extentReport/report.html");
        //CONFIGURATION_ configs can use for design
        configs.config().setTheme(Theme.STANDARD);
        ExtentReports reports=new ExtentReports();
        reports.attachReporter(configs);
        ExtentTest extentTest=reports.createTest("Google Search");
        //test is one Scenario in cucumber
        extentTest.pass("Its passing");
        extentTest.fail("didnt match. FAIL!");
        reports.flush();
        System.out.println("DONE!");

    }
}
