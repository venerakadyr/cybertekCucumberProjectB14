package api.api_Test_Il;
import api.apiModels.API_RequestBody;
import api.apiModels.Student;
import api.apiModels.Teacher;

import org.junit.Test;
import org.assertj.core.api.SoftAssertions;
import utilities.APIUtils;


public class API_Utility_Test {
    @Test
    public void testingUtil() {
        String resource = "/teacher/all";

       APIUtils.hitGET(resource);
//        System.out.println(APIUtil.getResponseLISTBody().getTeachers().get(0).getFirstName());

        for (Teacher t : APIUtils.getResponseLISTBody().getTeachers()) {
            if (t.getGender().equalsIgnoreCase("female") || t.getGender().equalsIgnoreCase("F")) {
                System.out.println(t.getFirstName());
            }
        }
    }


    @Test
    public void batchValidation() {
        String resource = "/student/all";

        int counter = 0;
        APIUtils.hitGET(resource);
//        for(Student student: APIUtil.getResponseLISTBody().getStudents()){
//            if(student.getBatch()>6&&student.getBatch()<15){
//                System.out.println(student.getFirstName()+"-"+ student.getBatch());
//            }else {
//                count++;
//
//            }
//        }
//
//        System.out.println(count+" Invalid Batch");
//    }
        SoftAssertions softAssertions = new SoftAssertions();
        int index = 0;
        for (Student student : APIUtils.getResponseLISTBody().getStudents()) {

            if (student.getBatch() > 6 && student.getBatch() < 15) {
                index++;
                System.out.println(index + student.getFirstName() + student.getBatch());
                continue;
            }

            softAssertions.assertAll();
// will

        }

    }


    @Test
    public void postTesting(){
        API_RequestBody teacher=new API_RequestBody();
        teacher.setEmailAddress("teac@gmail.com");
        teacher.setFirstName("Beautigul ");
        teacher.setLastName("City");
        teacher.setJoinDate("10/10/21");
        teacher.setSalary(7699);
        teacher.setBatch(11);
        teacher.setPhone("456786778");
        teacher.setPassword("hdfgdskuf");
        teacher.setSection("Ronaldo");
        teacher.setSubject("api");
        teacher.setGender("F");
        teacher.setDepartment("oracle");
        teacher.setBirthDate("12/23/11");
        teacher.setPremanentAddress("Main Second street");


       APIUtils.hitPOST("/teacher/create",teacher);




    }

    @Test
    public void deleteTesting(){

        APIUtils.hitDELETE("/teacher/delete/2741");
    }



    @Test
    public void updateTesting(){
//        String resource = "/teacher/update";

        API_RequestBody requestBody = new API_RequestBody();
        requestBody.setEmailAddress("new@gmail.com");
        requestBody.setFirstName("Tim");
        requestBody.setLastName("VVVVV");
        requestBody.setJoinDate("01/02/2003");
        requestBody.setSalary(5004);
        requestBody.setBatch(12);
        requestBody.setBirthDate("01/01/1987");
        requestBody.setGender("Male");
        requestBody.setPassword("jb123");
        requestBody.setPhone("2342-23423413");
        requestBody.setPremanentAddress("32 main street");
        requestBody.setSection("OK");
        requestBody.setSubject("Coding");
        requestBody.setDepartment("CS");
        requestBody.setTeacherId(2625);

        APIUtils.hitPUT("/teacher/update", requestBody);
    }







}

