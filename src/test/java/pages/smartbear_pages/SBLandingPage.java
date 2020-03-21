package pages.smartbear_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver_Utils;

public class SBLandingPage {
    public SBLandingPage(){
        PageFactory.initElements(Driver_Utils.getDriver(), this);
    }
    @FindBy(linkText = "Order")
    public WebElement orderLink;
}
