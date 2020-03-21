package pages.smartbear_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver_Utils;

public class SBLoginPage {
    //When we are creating POM page
    //1-Create a constructor and call PageFactory method
    public SBLoginPage(){
        PageFactory.initElements(Driver_Utils.getDriver(),this);
    }
    //2-@Finby annotation  to locate webElement

     // @Finby annotation locates the webElement, then we store that webElement on the next line
    @FindBy(id="ctl00_MainContent_username")
    public WebElement usernameInput;


    @FindBy(id="ctl00_MainContent_password")
    public WebElement passwordInput;

    @FindBy(id="ctl00_MainContent_login_button")
    public WebElement loginButton;

    @FindBy (id="ctl00_MainContent_status")
    public WebElement errorMessage;

}
