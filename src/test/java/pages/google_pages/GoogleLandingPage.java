package pages.google_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver_Utils;

public class GoogleLandingPage {

   public GoogleLandingPage(){

       PageFactory.initElements(Driver_Utils.getDriver(),this);
   }



   @FindBy(name="q")
    public WebElement  searchBox;

  @FindBy(name="btnK")
  public WebElement searchButton;




}
