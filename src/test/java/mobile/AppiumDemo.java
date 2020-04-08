package mobile;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import utilities.Synchronization;

import java.net.MalformedURLException;
import java.net.URL;

public class AppiumDemo {
    public static AppiumDriverLocalService appiumDriverLocalService;
    //will start the service
    public static AndroidDriver androidDriver;
    //it driver for androids



    @Before
    public void setup(){
        //set default service
        appiumDriverLocalService =AppiumDriverLocalService.buildDefaultService();
//        {
//  "appPackage": "com.google.android.apps.maps",
//  "automationName": "UiAutomator2",
//  "platformName": "Android",
//  "platformVersion": "9",
//  "deviceName": "Nexus",
//  "appActivity": "com.google.android.maps.MapsActivity"
//}
       //initiating capabilities
        DesiredCapabilities desiredCapabilities=new DesiredCapabilities();
        desiredCapabilities.setCapability("appPackage","com.google.android.apps.maps");
        desiredCapabilities.setCapability("automationName", "UiAutomator2");
        desiredCapabilities.setCapability("platformName", "Android");
        desiredCapabilities.setCapability("platformVersion", "9");
        desiredCapabilities.setCapability("deviceName","Nexus");
        desiredCapabilities.setCapability("appActivity", "com.google.android.maps.MapsActivity");

        // if app allows to have access to location, photo, etc -- granting/giving permission
        desiredCapabilities.setCapability("autoGrantPermission", true);
        desiredCapabilities.setCapability("autoAcceptAlerts",true);

         // debugging the app - if takes too long (example: if debug doesn't finish in 10 seconds - session gets closed)
        // this line says "wait 60 seconds"
        desiredCapabilities.setCapability("newCommandTimeout", 60000);

        //initializing the AndroidDriver, URL is provided bu Appium

        try {
            androidDriver=new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),desiredCapabilities);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
}

//        @Before
//        public void setUp() {
//
//            appiumDriverLocalService = AppiumDriverLocalService.buildDefaultService();
//            DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
//
//            appiumDriverLocalService.start();
//
//            desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Nexus 5X API 28"
//            );
//            desiredCapabilities.setCapability("avd", "Nexus 5X API 28");
//            desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
//            desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "10");
//            desiredCapabilities.setCapability("appPackage", "com.google.android.apps.maps");
//            desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
//            desiredCapabilities.setCapability("appActivity", "com.google.android.maps.MapsActivity");
//
//            desiredCapabilities.setCapability("autoGrantPermissions", true);
//            desiredCapabilities.setCapability("autoAcceptAlerts", true);
//            desiredCapabilities.setCapability("newCommandTimeout", 60000);
//            desiredCapabilities.setCapability("noReset", true);
//            try {
//                androidDriver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), desiredCapabilities);
//            } catch (MalformedURLException e) {
//                e.printStackTrace();
//            }
//            androidDriver.manage().timeouts().implicitlyWait(35, TimeUnit.SECONDS);
//        }
//









    @Test
    public void test(){
        System.out.println("Venera, you can do it!!!");
      androidDriver.findElement(By.xpath("//*[@text='SIGN IN']")).click();


        Synchronization.pause(2);
//        androidDriver.findElement(By.xpath("//*[@content-decs='Menu']")).click();


    }

    @After
    public void tearDown(){
        androidDriver.quit();;
        appiumDriverLocalService.stop();
    }
}
