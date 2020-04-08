package test;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentReport {
    public static void main(String[] args) {
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
