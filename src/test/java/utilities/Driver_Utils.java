package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class Driver_Utils {
    public static final String USERNAME = "venerakadyr";
    public static final String ACCESS_KEY = "076ea0c2-673e-4333-9941-edbbb1ff8aa1";
    public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:80/wd/hub";

    private  static WebDriver driver;

    private Driver_Utils(){
    }
//
//   public static WebDriver getDriver() {
//       if (driver == null) {
//           String browser = Config.getProperty("browser");
//           if ("chrome".equals(browser)) {
//               WebDriverManager.chromedriver().setup();
//               driver = new ChromeDriver();
//           } else if ("firefox".equals(browser)) {
//               WebDriverManager.firefoxdriver().setup();
//               driver = new FirefoxDriver();
//           } else if ("opera".equals(browser)) {
//               WebDriverManager.operadriver().setup();
//               driver = new OperaDriver();
//           }
//           WebDriverManager.chromedriver().setup();
//           driver = new ChromeDriver();
//           driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//           driver.manage().window().maximize();
//
//
//       }
//       return driver;
//   }
//   //===============================================================================================
   public static WebDriver getDriver() {
       if (driver == null) {
           switch (Config_Utils.getProperty("browser")) {
               case "chrome":
                   WebDriverManager.chromedriver().setup();
                   driver = new ChromeDriver();
                   break;
               case "firefox":
                   WebDriverManager.firefoxdriver().setup();
                   driver = new FirefoxDriver();
                   break;
               case "opera":
                   WebDriverManager.operadriver().setup();
                   driver = new OperaDriver();
                   break;

               case"sauceLab":
                   DesiredCapabilities caps = DesiredCapabilities.chrome();

                   MutableCapabilities sauceOptions = new MutableCapabilities();

                   ChromeOptions browserOptions = new ChromeOptions();
                   browserOptions.setExperimentalOption("w3c", true);
                   browserOptions.setCapability("platformName", "macOS 10.15");
                   browserOptions.setCapability("browserVersion", "latest");
                   browserOptions.setCapability("sauce:options", sauceOptions);
                   try {
                       driver = new RemoteWebDriver(new URL(URL), caps);
                   } catch (MalformedURLException e) {
                       e.printStackTrace();
                   }
                    break;


           }
//           WebDriverManager.chromedriver().setup();
//           driver = new ChromeDriver();
//           driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//           driver.manage().window().maximize();


       }
   return driver;
   }
////========================================================================================


   public static void closeDriver(){
        if(driver!=null) {
            driver.quit();
           driver=null;
        }
   }
    public static void basicAuth(String originalUrl,String admin,String password,String element ) {
        Driver_Utils.getDriver().get(originalUrl);
        String url= Driver_Utils.getDriver().getCurrentUrl();
        WebElement target = Driver_Utils.getDriver().findElement(By.linkText(element));
        target.click();

        Driver_Utils.getDriver().get(url.substring(0,7)+admin+":"+password+"@"+url.substring(7));
        String title = Driver_Utils.getDriver().getTitle();


    }
//TODO  connected to Browser Utills
//    private static Logger logger = Logger.getLogger(Driver.class);
//    private static ThreadLocal<WebDriver> driverPool = new ThreadLocal<>();
//    private static String userName = "vasylfomiuk2";
//    private static String accessKey = "N9rzTpSQYnQFNLe2YPgr";
//    private static final String URL = "https://" + userName + ":" + accessKey + "@hub-cloud.browserstack.com/wd/hub";
//    private Driver() {
//    }
//    public static WebDriver get() {
//        //if this thread doesn't have a web driver yet - create it and add to pool
//        if (driverPool.get() == null) {
//            logger.info("TRYING TO CREATE DRIVER");
//            // this line will tell which browser should open based on the value from properties file
//            String browserParamFromEnv = System.getProperty("browser");
//            String browser = browserParamFromEnv == null ? ConfigurationReader.getProperty("browser") : browserParamFromEnv;
//            switch (browser) {
//                case "chrome":
//                    WebDriverManager.chromedriver().setup();
//                    driverPool.set(new ChromeDriver());
//                    break;
//                case "chrome_headless":
//                    WebDriverManager.chromedriver().setup();
//                    driverPool.set(new ChromeDriver(new ChromeOptions().setHeadless(true)));
//                    break;
//                case "firefox":
//                    WebDriverManager.firefoxdriver().setup();
//                    driverPool.set(new FirefoxDriver());
//                    break;
//                case "firefox_headless":
//                    WebDriverManager.firefoxdriver().setup();
//                    driverPool.set(new FirefoxDriver(new FirefoxOptions().setHeadless(true)));
//                    break;
//                case "ie":
//                    if (!System.getProperty("os.name").toLowerCase().contains("windows")) {
//                        throw new WebDriverException("Your OS doesn't support Internet Explorer");
//                    }
//                    WebDriverManager.iedriver().setup();
//                    driverPool.set(new InternetExplorerDriver());
//                    break;
//                case "edge":
//                    if (!System.getProperty("os.name").toLowerCase().contains("windows")) {
//                        throw new WebDriverException("Your OS doesn't support Edge");
//                    }
//                    WebDriverManager.edgedriver().setup();
//                    driverPool.set(new EdgeDriver());
//                    break;
//                case "safari":
//                    if (!System.getProperty("os.name").toLowerCase().contains("mac")) {
//                        throw new WebDriverException("Your OS doesn't support Safari");
//                    }
//                    WebDriverManager.getInstance(SafariDriver.class).setup();
//                    driverPool.set(new SafariDriver());
//                    break;
//                case "remote_chrome":
//                    try {
//                        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
//                        desiredCapabilities.setBrowserName(BrowserType.CHROME);
//                        desiredCapabilities.setCapability("platform", Platform.ANY);
//                        driverPool.set(new RemoteWebDriver(new URL("http://ec2-18-212-156-23.compute-1.amazonaws.com:4444/wd/hub"), desiredCapabilities));
//                    } catch (Exception e) {
//                        logger.error(e.getMessage());
//                        e.printStackTrace();
//                    }
//                    break;
//                case "remote_firefox":
//                    try {
//                        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
//                        desiredCapabilities.setBrowserName(BrowserType.FIREFOX);
//                        driverPool.set(new RemoteWebDriver(new URL("http://ec2-18-212-156-23.compute-1.amazonaws.com:4444/wd/hub"), desiredCapabilities));
//                    } catch (Exception e) {
//                        e.printStackTrace();
//                    }
//                    break;
//                case "mobile_chrome":
//                    try {
//                        //chrome options are used to parametrize browser
//                        ChromeOptions chromeOptions = new ChromeOptions();
//                        chromeOptions.addArguments("--incognito");
//                        DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
//                        desiredCapabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Pixel_2");
//                        desiredCapabilities.setCapability(MobileCapabilityType.VERSION, "7.0");
//                        desiredCapabilities.setCapability(MobileCapabilityType.BROWSER_NAME, MobileBrowserType.CHROME);
//                        desiredCapabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, Platform.ANDROID);
//                        desiredCapabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
//                        driverPool.set(new RemoteWebDriver(new URL("http://localhost:4723/wd/hub"), desiredCapabilities));
//                    } catch (Exception e) {
//                        e.printStackTrace();
//                    }
//                    break;
//                case "mobile_chrome_remote":
//                    try {
//                        DesiredCapabilities caps = new DesiredCapabilities();
//                        caps.setCapability("browserName", "android");
//                        caps.setCapability("device", "Samsung Galaxy S10");
//                        caps.setCapability("realMobile", "true");
//                        caps.setCapability("os_version", "9.0");
//                        caps.setCapability("name", "VyTrack tests");
//                        driverPool.set(new RemoteWebDriver(new URL(URL), caps));
//                    } catch (Exception e) {
//                        e.printStackTrace();
//                    }
//                    break;
//                case "mobile_safari_remote":
//                    try {
//                        DesiredCapabilities caps = new DesiredCapabilities();
//                        caps.setCapability("browserName", "safari");
//                        caps.setCapability("device", "iPhone 11 Pro Max");
//                        caps.setCapability("os_version", "13");
//                        caps.setCapability("realMobile", "true");
//                        caps.setCapability("name", "VyTrack tests");
//                        driverPool.set(new RemoteWebDriver(new URL(URL), caps));
//                    } catch (Exception e) {
//                        e.printStackTrace();
//                    }
//                    break;
//                default:
//                    throw new RuntimeException("Invalid browser name!");
//            }
//        }
//        //return corresponded to thread id webdriver object
//        return driverPool.get();
//    }
//    public static void close() {
//        driverPool.get().quit();
//        driverPool.remove();
//    }
}
