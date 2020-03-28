package api.api_Test_VA;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.given;

public class TestManipulation {


    @BeforeClass
    public static void  setUp(){
        //set the base URI so that we dont have to type in all the  time
        RestAssured.baseURI="http://api.cybertektraining.com";
    }



    @Test
    public void student_Get_WithID_Json_Using_Path(){
        Response response = given().accept(ContentType.JSON)
                .and().pathParam("id", 7461)
                .when().get("/student/{id}");

        System.out.println(response.body().path("id").toString());
        System.out.println();

    }






}
