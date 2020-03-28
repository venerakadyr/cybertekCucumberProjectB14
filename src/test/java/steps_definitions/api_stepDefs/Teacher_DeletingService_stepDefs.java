package steps_definitions.api_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import utilities.API;

public class Teacher_DeletingService_stepDefs {
    @Given("user delete teacher at {string}")
    public void user_delete_teacher_at(String resource) {
      API.hitDELETE(resource);
    }
    @Given("user gets teacher {string}")
    public void user_gets_teacher(String resource) {
        API.hitGET(resource);
    }
    @Then("user verifies response message with {string}")
    public void user_verifies_response_message_with(String string) {
        String message = API.getResponseLISTBody().getMessage();
        System.out.println(message);
        String expectedMessage = "Teacher with id = 2538 NOT FOUND!";
        Assert.assertEquals(expectedMessage, message);
    }

}
