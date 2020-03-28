package api.api_Test_VA;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Test;

import static io.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class VA_Test {
    @Test
    public void getAllStudentVA() {
        /*
        Given accept type is Json
        When user sends a get request  to http://api.cybertektraining.com/student/all
        Then respone status code is 200
        And response body should json
        And response should contains "name":"Veronica"
         */

//       Response response= RestAssured.get("http://api.cybertektraining.com/student/all");
//       Response response= RestAssured.given().accept(ContentType.JSON).when().get("http://api.cybertektraining.com/student/all");
//        System.out.println(response.statusCode());
//        response.body().prettyPrint();
//
//        Assert.assertEquals("Status Code id Failed!",200, response.statusCode());
//        Assert.assertEquals("application/json;charset=UTF-8",response.contentType());
//        Assert.assertTrue(response.body().asString().contains("Veromica"));
//        System.out.println("Done");



                 //request part
                 given().accept(ContentType.JSON)
                .when().get("http://api.cybertektraining.com/student/all")
                         //response part
                .then().statusCode(200)
                .and().contentType("application/json;charset=UTF-8");

    }

    @Test
    public void singleStudentVa(){
        Response response=when().get("http://api.cybertektraining.com/student/7432");
        assertEquals(200, response.statusCode());
        assertEquals("application/json;charset=UTF-8", ContentType.JSON);
        assertTrue(response.body().asString().contains("Veromica"));

    }
}
