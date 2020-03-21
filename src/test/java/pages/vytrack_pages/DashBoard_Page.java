package pages.vytrack_pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver_Utils;

public class DashBoard_Page {
    public DashBoard_Page() {
        PageFactory.initElements(Driver_Utils.getDriver(), this);
    }

    public static void navigateToModule(String tab, String module) {
        String tabLocatorXpath = "//span[contains(text(), '" + tab + "') and @class = 'title title-level-1']";
        String moduleLocatorXpath = "//span[.= '" + module + "']";
        Driver_Utils.getDriver().findElement(By.xpath(tabLocatorXpath)).click();
        Driver_Utils.getDriver().findElement(By.xpath(moduleLocatorXpath)).click();

    }
}