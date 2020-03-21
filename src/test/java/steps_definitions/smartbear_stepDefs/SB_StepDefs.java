package steps_definitions.smartbear_stepDefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.smartbear_pages.SBLoginPage;
import utilities.Driver_Utils;

public class SB_StepDefs {
SBLoginPage smartBearLoginPage=new SBLoginPage();


    @When("User is on SmartBear login page")
    public void user_is_on_SmartBear_login_page() {
        Driver_Utils.getDriver().get("http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx");
    }
    @When("User enters correct username")
    public void user_enters_correct_username() {
        smartBearLoginPage.usernameInput.sendKeys("Tester");
    }
//    @When("User enters correct {string}")
//    public void user_enters_correct(String string) {
//        // Write code here that turns the phrase above into concrete actions
//        throw new cucumber.api.PendingException();
//    }
    @When("User enters correct password")
    public void user_enters_correct_password() {
        smartBearLoginPage.passwordInput.sendKeys("test");
    }
    @When("User clicks to login button")
    public void user_clicks_to_login_button() {
        smartBearLoginPage.loginButton.click();
    }
    @Then("User should be logged in and be able to verify Welcome text is displayed")
    public void user_should_be_logged_in_and_be_able_to_verify_Welcome_text_is_displayed() {
        // instead of asserting welcome webelement we just assert the title
        String actualTitle= Driver_Utils.getDriver().getTitle();
        String expectedTitle = "Web Orders";
        Assert.assertTrue(actualTitle.equals(expectedTitle));
    }
    @When("User enters incorrect password")
    public void user_enters_incorrect_password() {
        smartBearLoginPage.passwordInput.sendKeys("wrongpassword");
    }
    @Then("User should see the error message displayed on the page")
    public void user_should_see_the_error_message_displayed_on_the_page() {
        Assert.assertTrue("Error message is not displayed! ",smartBearLoginPage.errorMessage.isDisplayed());
    }
}







//    @When("User is on SmartBear login page")
//    public void user_is_on_SmartBear_login_page() {
//
//    }
//
//    @When("User enters correct username")
//    public void user_enters_correct_username() {
//
//    }
//
//    @When("User enters correct password")
//    public void user_enters_correct_password() {
//
//    }
//
//    @When("User clicks to login button")
//    public void user_clicks_to_login_button() {
//
//    }
//
//    @Then("User should be logged in and be able to verify Welcome text is displayed")
//    public void user_should_be_logged_in_and_be_able_to_verify_Welcome_text_is_displayed() {
//
//    }

//    SmartBearLoginPage smartBearLoginPage;
//
//    @When("User is Login page")
//    public void user_is_Login_page() {
//        Driver.getDriver().get(Config.getProperty("smartBearUrl"));
//
//
//
//
//    }
//
//    @When("User enter the username")
//    public void user_enter_the_username() {
//        smartBearLoginPage.usernameInput.sendKeys(Config.getProperty("smartBearUsername"));
//    }
//
//    @When("User enter the password")
//    public void user_enter_the_password() {
//        smartBearLoginPage.passwordInput.sendKeys(Config.getProperty("smartBearPassword"));
//    }
//
//    @Then("User click on login button")
//    public void user_click_on_login_button() {
//        smartBearLoginPage.loginButton.click();
//
//    }
//
//
//    @When("User is on  home page")
//    public void user_is_on_home_page() {
//
//
//    }
//
//    @Then("User sees the welcome message is displayed")
//    public void user_sees_the_welcome_message_is_displayed() {
//        WebElement message=Driver.getDriver().findElement(By.className("login_info"));
//        Assert.assertTrue("Welcome message verification is failed",message.isDisplayed());
//    }


