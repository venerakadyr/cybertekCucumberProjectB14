package pages.etsy_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver_Utils;

public class Etsy_HomePage {
    public Etsy_HomePage(){
        PageFactory.initElements(Driver_Utils.getDriver(),this);
    }

    @FindBy(id = "global-enhancements-search-query")
    public WebElement searchBox;










}
