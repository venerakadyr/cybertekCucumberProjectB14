package api.api_Test_VA;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class Test_With_Param {
    @BeforeClass
    public static void setUp() {
        //set the base URI so that we dont have to type in all the  time
        RestAssured.baseURI = "http://api.cybertektraining.com";
    }

    @Test
    public void getStudetnById_Positive_Path_param_Tesrt() {

        Response response = given().accept(ContentType.JSON)
                .and().pathParam("id", 7461)
                .when().get("/student/{id}");
        response.prettyPrint();

//             .then().log().all();-----> print out all the information
        assertEquals(200, response.statusCode());
        assertEquals("application/json;charset=UTF-8", response.contentType());
        assertTrue(response.body().asString().contains("kukaku"));
    }




    @Test
    public void negativeFindBy_Id_PathParam(){
        Response response = given().accept(ContentType.JSON)
                .and().pathParam("id", 746)
                .when().get("/student/{id}");
                response.prettyPrint();

//             .then().log().all();-----> print out all the information
        assertEquals(404, response.statusCode());
        assertEquals("application/json;charset=UTF-8", response.contentType());
        assertTrue(response.body().asString().contains("Student with id = 746 NOT FOUND!"));
        System.out.println("DOne");

    }
}
