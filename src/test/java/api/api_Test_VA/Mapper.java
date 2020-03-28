package api.api_Test_VA;

import api.apiModels.Student;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class Mapper {
    @Test
    public void  pojoMapping() throws Exception {
        Response response= RestAssured.get("http://api.cybertektraining.com/student/7228");

        System.out.println(response.statusCode());
        System.out.println(response.asString());


        ObjectMapper mapper=new ObjectMapper();

         String json=response.asString();
        System.out.println(json);
        Student student=mapper.readValue(json, Student.class);

//        System.out.println(student.get(0).getId());




    }
}
