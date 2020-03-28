package api.api_Test_Il;

import utilities.API;

public class Test {
 @org.junit.Test
    public void teacherDeletePositive(){
        String resourceForDelete="/student/delete/7561";
        API.hitDELETE(resourceForDelete);

//        String resourceGet="/teacher/7501";
//        API_Utils.hitGET(resourceGet);


        String message= API.getResponseLISTBody().getMessage();
    }


}
