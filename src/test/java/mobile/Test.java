package mobile;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import utilities.Time;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Test {
    public static AppiumDriverLocalService appiumDriverLocalService;
    //will start the service
    public static AndroidDriver androidDriver;






    @Before
        public void setUp() {

            appiumDriverLocalService = AppiumDriverLocalService.buildDefaultService();
            DesiredCapabilities desiredCapabilities = new DesiredCapabilities();

            appiumDriverLocalService.start();

            desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Nexus"
            );
            desiredCapabilities.setCapability("avd", "Nexus");
            desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
            desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "9");
            desiredCapabilities.setCapability("appPackage", "com.google.android.apps.maps");
            desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
            desiredCapabilities.setCapability("appActivity", "com.google.android.maps.MapsActivity");

            desiredCapabilities.setCapability("autoGrantPermissions", true);
            desiredCapabilities.setCapability("autoAcceptAlerts", true);
            desiredCapabilities.setCapability("newCommandTimeout", 60000);
            desiredCapabilities.setCapability("noReset", true);
            try {
                androidDriver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), desiredCapabilities);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
            androidDriver.manage().timeouts().implicitlyWait(35, TimeUnit.SECONDS);
        }


    @org.junit.Test
    public void test(){
        System.out.println("Venera, you can do it!!!");
        androidDriver.findElement(By.xpath("//*[@text='SKIP']")).click();

        Time.pause(2);
        androidDriver.findElement(By.xpath("//*[@content-decs='Menu']")).click();


    }

    @After
    public void tearDown(){
        androidDriver.quit();;
        appiumDriverLocalService.stop();
    }



}
