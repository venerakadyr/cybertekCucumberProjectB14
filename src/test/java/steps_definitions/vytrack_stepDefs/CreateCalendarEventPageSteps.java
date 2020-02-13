package steps_definitions.vytrack_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.vytrack_pages.CreateCalendarEventPage;
import pages.vytrack_pages.DashBoard_Page;
import pages.vytrack_pages.LoginPage;
import utilities.Config;
import utilities.Driver;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class CreateCalendarEventPageSteps {

    private CreateCalendarEventPage createCalendarEventPage = new CreateCalendarEventPage();
    private LoginPage lp = new LoginPage();
    // object is private because i want it to be accesable from on @Given method


    @Given("the user is signed in as a sale manager")
    public void the_user_is_signed_in_as_a_sale_manager() {
        Driver.getDriver().get(Config.getProperty("vytrackUrl"));
        lp.usernameInput.sendKeys(Config.getProperty("vytrackUsername"));
        lp.passwordInput.sendKeys(Config.getProperty("vytrackPassword"));
        lp.loginButton.click();
    }

    @When("the user is on the All Calendar Events page under the Activities tab")
    public void the_user_is_on_the_All_Calendar_Events_page_under_the_Activities_tab() {
        DashBoard_Page.navigateToModule("Activities", "Calendar Events");

    }


    @When("the user should see their name as the default value of of the owner field")
    public void the_user_should_see_their_name_as_the_default_value_of_of_the_owner_field() {
        String owner = createCalendarEventPage.ownerField.getText().trim();
        String loginUser = createCalendarEventPage.loginUser.getText().trim();
        Assert.assertEquals(owner, loginUser);
    }

    @When("the user should see the title field to be empty by default ")
    public void the_user_should_see_the_title_field_to_be_empty_by_default() {
        Assert.assertTrue(createCalendarEventPage.titleField.getAttribute("value").isEmpty());
    }

    @When("the user should see the start date field with the default value of the current date")
    public void the_user_should_see_the_start_date_field_with_the_default_value_of_the_current_date() {
        String expectedDate = LocalDate.now().format(DateTimeFormatter.ofPattern("MMM d, yyy"));
        String actualDate = createCalendarEventPage.startDate.getAttribute("value");
        Assert.assertEquals(expectedDate, actualDate);
    }

    @When("the user should see the start time field with the default value of the current time ")
    public void the_user_should_see_the_start_time_field_with_the_default_value_of_the_current_time() {
        String expectedTime = LocalTime.now().minusHours(2).format(DateTimeFormatter.ofPattern("h:mm a"));
        String actualTime = createCalendarEventPage.startTime.getAttribute("value");
        Assert.assertEquals(expectedTime, actualTime);
    }
}