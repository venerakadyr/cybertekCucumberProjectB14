package api_Test_Il;

import org.junit.BeforeClass;
import utilities.API_Utils;

public class Test {
 @org.junit.Test
    public void teacherDeletePositive(){
        String resourceForDelete="/student/delete/7561";
        API_Utils.hitDELETE(resourceForDelete);

//        String resourceGet="/teacher/7501";
//        API_Utils.hitGET(resourceGet);


        String message=API_Utils.getResponseLISTBody().getMessage();
    }


}
