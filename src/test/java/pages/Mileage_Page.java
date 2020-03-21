package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver_Utils;

public class Mileage_Page {
    public Mileage_Page(){
        PageFactory.initElements(Driver_Utils.getDriver(),this);

    }


    @FindBy(xpath ="//input[@id='uscodreading']")
    public WebElement currentOdo;

    @FindBy(id="uspodreading")
    public WebElement previousOdo;

    @FindBy(id="usgasputin")
    public WebElement gasInput;



    @FindBy(xpath = "(//input[@alt='Calculate'])[1]")
    public WebElement calculateButton;

    @FindBy(xpath="//b[contains(text(),'mpg')]")
    public WebElement resultInGas;


}
