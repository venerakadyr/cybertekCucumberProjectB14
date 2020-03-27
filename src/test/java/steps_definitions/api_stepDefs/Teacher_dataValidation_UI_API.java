package steps_definitions.api_stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.cybertekTraining_pages.CBTHOmepage;
import utilities.API_Utils;
import utilities.Config;
import utilities.Driver;
import utilities.Time;

public class Teacher_dataValidation_UI_API {


    CBTHOmepage cbthOmepage=new CBTHOmepage();
    @Given("user gets teacher  {string}")
    public void user_gets_teacher(String resource) {
        API_Utils.hitGET(resource);

    }

    @Given("user goes to cybertek training  app")
    public void user_goes_to_cybertek_training_app() {
        Driver.getDriver().get(Config.getProperty("cybertekTrainingUrl"));
    }

    @Then("user opens teacher profile details page {string}")
    public void user_opens_teacher_profile_details_page(String teacherId) {
        cbthOmepage.teachersDropdown.click();
        Time.pause(3);
       cbthOmepage.allTeachersLink.click();
       Time.pause(2);
        cbthOmepage.teacherIDSeachInput.sendKeys(teacherId);
        Time.pause(2);
       cbthOmepage.searchBtn.click();
       Time.pause(2);
        cbthOmepage.teacher.click();
    }

    @Then("user cross validations details on API vs Ui")
    public void user_cross_validations_details_on_API_vs_Ui() {
        String apiFullName = API_Utils.getResponseLISTBody().getTeachers().get(0).getFirstName() + " " + API_Utils.getResponseLISTBody().getTeachers().get(0).getLastName();
        String uiFullName = cbthOmepage.fullName.getText();
        System.out.println(apiFullName);
        System.out.println(uiFullName);
        Assert.assertEquals("e2e full name verification failed", apiFullName, uiFullName);
        Assert.assertEquals("e2e phone verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getPhone().trim(), cbthOmepage.phoneNumber.getText().trim());
        Assert.assertEquals("e2e email verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getEmailAddress().trim(), cbthOmepage.email.getText().trim());
        Assert.assertEquals("e2e batch verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getBatch()+"".trim(), cbthOmepage.batch.getText().trim());
        Assert.assertEquals("e2e birthday verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getBirthDate().trim(), cbthOmepage.birthday.getText().trim());
        Assert.assertEquals("e2e join date verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getJoinDate().trim(), cbthOmepage.joinDate.getText().trim());
        Assert.assertEquals("e2e address verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getPremanentAddress().trim(), cbthOmepage.address.getText().trim());
        Assert.assertEquals("e2e gender verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getGender().trim(), cbthOmepage.gender.getText().trim());
        Assert.assertEquals("e2e salary verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getSalary()+"".trim(), cbthOmepage.salary.getText().trim());
        Assert.assertEquals("e2e section verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getSection().trim(), cbthOmepage.section.getText().trim());
        Assert.assertEquals("e2e subject verification failed", API_Utils.getResponseLISTBody().getTeachers().get(0).getSubject().trim(), cbthOmepage.subject.getText().trim());

    }




}
