package steps_definitions.etsy_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import pages.etsy_pages.Etsy_HomePage;
import utilities.Config;
import utilities.Driver;

public class Etsy_StepDefs {

    Etsy_HomePage etsy_homePage=new Etsy_HomePage();
    @Given("User is on Etsy home page")
    public void user_is_on_Etsy_home_page() {
        Driver.getDriver().get(Config.getProperty("etsyURL"));

    }

    @When("user search for wooden spoon")
    public void user_search_for_wooden_spoon() {
        etsy_homePage.searchBox.sendKeys("wooden spoon"+ Keys.ENTER);

    }

    @Then("User should see wooden spoon in Etsy title")
    public void user_should_see_wooden_spoon_in_Etsy_title() {
        String actualTitle=Driver.getDriver().getTitle();
        String expectdTitle="Wooden spoon";

        Assert.assertTrue(actualTitle.contains(expectdTitle));
    }




    @When("user search for {string}")
    public void user_search_for(String searchValue) {
        etsy_homePage.searchBox.sendKeys(searchValue+ Keys.ENTER);
    }

    @Then("User should see {string} in Etsy title")
    public void user_should_see_in_Etsy_title(String searchValue) {
        //compare actual title vs expected title
        String actualTitle = Driver.getDriver().getTitle();
        String expectedInTitle = searchValue;
        Assert.assertTrue(actualTitle.contains(expectedInTitle));



    }








}
