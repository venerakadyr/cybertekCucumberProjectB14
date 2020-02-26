package pages.wiki_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Wiki_SteveJobs_Pages {
    public Wiki_SteveJobs_Pages(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//input[@name='search']")
    public WebElement wikiSearchBox;


    @FindBy(xpath = "//i[contains(text(),'Search')]")
    public WebElement wikiSearchButton;


    @FindBy(xpath = "//h1[contains(text(),'Steve Jobs')]")
    public WebElement wikiHeader;

    @FindBy(xpath = "//div[@class='fn']")
    public WebElement wikiImageHeader;





}
