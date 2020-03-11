package steps_definitions.dzone_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import utilities.Driver;
import utilities.Log;
import utilities.TempStorage;

public class Dzone_steps {
    @Given("the user goes to {string}")
    public void the_user_goes_to(String url) {
        Driver.getDriver().get(url);
        Log.info("User is on: " + url);
    }
    @When("the user takes the header of the first webpage")
    public void the_user_takes_the_header_of_the_first_webpage() {
        String s1 = Driver.getDriver().findElement(By.xpath("//h1")).getText();
        TempStorage.addData("test1", s1);
        Log.info("Header 1 is taken: " + s1);
    }
    @When("the user takes the header of the second page")
    public void the_user_takes_the_header_of_the_second_page() {
        String s2 = Driver.getDriver().findElement(By.xpath("//h1")).getText();
        TempStorage.addData("test2", s2);
        Log.info("Header 2 is taken: " + s2);
    }
    @Then("the user compares two headers")
    public void the_user_compares_two_headers() {
        Log.warn("Comparing two data.");
        Assert.assertEquals(TempStorage.getData("test1"), TempStorage.getData("test2"));
    }





















}
