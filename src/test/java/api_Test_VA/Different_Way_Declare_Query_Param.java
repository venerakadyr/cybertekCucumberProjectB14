package api_Test_VA;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class Different_Way_Declare_Query_Param {
    @Test
    public void testParam(){
        Response response=given().accept(ContentType.XML)
                .queryParam("genfer","Female")
                .queryParam("nameConatins","e")
                .when().get("/student/search");


        //=======================================================================================

        Response response1=given().accept(ContentType.JSON)
                .queryParams("gender","Female","nameContains","e")
                .when().get("/student/search");
       //========================================================================================
        Map<String, Object> params=new HashMap<>();
        params.put("gender","Female");
        params.put("nameContains","e");

        Response response2=given().accept(ContentType.JSON)
                .queryParams(params)
                .when().get("/student/search");

    }
}
