package api.api_Test_Il;

import utilities.APIUtils;

public class Test {
 @org.junit.Test
    public void teacherDeletePositive(){
        String resourceForDelete="/student/delete/7561";
        APIUtils.hitDELETE(resourceForDelete);

//        String resourceGet="/teacher/7501";
//        API_Utils.hitGET(resourceGet);


        String message= APIUtils.getResponseLISTBody().getMessage();
    }


}
