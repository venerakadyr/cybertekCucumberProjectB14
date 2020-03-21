package saucelab;

import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class SauceLabsTest {

        public static final String USERNAME = "oytunpiren";
        public static final String ACCESS_KEY = "ef23d61d-b714-4ac2-bd22-a5c75ce55446";
        public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:80/wd/hub";
        // https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing
        public static void main(String[] args) throws MalformedURLException {
            DesiredCapabilities caps = DesiredCapabilities.chrome();
            MutableCapabilities sauceOptions = new MutableCapabilities();
            ChromeOptions browserOptions = new ChromeOptions();
            browserOptions.setExperimentalOption("w3c", true);
            browserOptions.setCapability("platformName", "macOS 10.15");
            browserOptions.setCapability("browserVersion", "latest");
            browserOptions.setCapability("sauce:options", sauceOptions);
//https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
            WebDriver driver = new RemoteWebDriver(new URL(URL),caps);
            // if the URL is complainig import
            //import  java.net.URL;

            //you start to write your test here!!!!
            driver.get("http://google.com");
            System.out.println(driver.getTitle());
        }
    }


