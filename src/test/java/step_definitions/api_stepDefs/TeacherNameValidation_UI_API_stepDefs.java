package step_definitions.api_stepDefs;

import api.apiModels.Teacher;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import pages.cybertekTraining_pages.CBTHOmepage;
import utilities.APIUtils;
import utilities.Synchronization;

import java.util.List;

public class TeacherNameValidation_UI_API_stepDefs {
    CBTHOmepage cbthOmepage = new CBTHOmepage();

    @Then("user searches for teacher with name {string}")
    public void user_searches_for_teacher_with_name(String teacherName) {
        cbthOmepage.teachersDropdown.click();
        cbthOmepage.allTeachersLink.click();
        Synchronization.pause(2);
        cbthOmepage.teacherNameInput.sendKeys(teacherName);
        Synchronization.pause(2);
        cbthOmepage.searchBtn.click();
        Synchronization.pause(2);


    }

    @Then("user cross validations details on API vs UI with {string}")
    public void user_cross_validations_details_on_API_vs_UI_with(String teacherName) {
        int APIrestult = APIUtils.getResponseLISTBody().getTeachers().size();
        int UIresult = cbthOmepage.searchResultsName.size();
        System.out.println(APIrestult);
        System.out.println(UIresult);


        Assert.assertEquals("Number of results failed", APIrestult, UIresult);

        List<WebElement> teachers = cbthOmepage.searchResultsName;
        for (WebElement teacher : teachers) {
            Assert.assertTrue("Teacher name failed on UI", teacher.getText().equals(teacherName));
        }

        List<Teacher> teachersAPI = APIUtils.getResponseLISTBody().getTeachers();
        for (Teacher teacher : teachersAPI) {
            Assert.assertTrue("Teacher name failed on API", teacher.getFirstName().equals(teacherName));
        }

    }
}