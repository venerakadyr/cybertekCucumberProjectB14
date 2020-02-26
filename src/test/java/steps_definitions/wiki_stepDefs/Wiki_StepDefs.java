package steps_definitions.wiki_stepDefs;

import com.sun.source.tree.AssertTree;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.wiki_pages.Wiki_SteveJobs_Pages;
import utilities.Driver;

import java.time.format.DateTimeFormatter;

public class Wiki_StepDefs {

    Wiki_SteveJobs_Pages wiki = new Wiki_SteveJobs_Pages();


    @Given("User is onWikipedia home page")
    public void user_is_onWikipedia_home_page() {
        Driver.getDriver().get("https://www.wikipedia.org");
    }

    @When("User types {string} in the wiki search box")
    public void user_types_in_the_wiki_search_box(String searchValue) {
        wiki.wikiSearchBox.sendKeys(searchValue);

    }

    @And("User clicks wiki search button")
    public void user_clicks_wiki_search_button() {
        wiki.wikiSearchButton.click();
    }

    @Then("User sees {string} is in the wiki title Note:")
    public void user_sees_is_in_the_wiki_title_Note(String searchValue) {
        String actualTitle = Driver.getDriver().getTitle();
        Assert.assertTrue(actualTitle.contains(searchValue));
    }

    @Then("User sees {string} is in the main headerNote")
    public void user_sees_is_in_the_main_headerNote(String searchHeader) {

     String header=wiki.wikiHeader.getText();
        Assert.assertTrue(header.contains(searchHeader));

    }
    @Then("User sees {string} is in the image header")
    public void user_sees_is_in_the_image_header(String imageHeader) {
       String actualImageHeader=wiki.wikiImageHeader.getText();
       Assert.assertTrue(actualImageHeader.contains(imageHeader));
    }

    }