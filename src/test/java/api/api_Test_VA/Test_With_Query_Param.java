package api.api_Test_VA;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Test;

import static io.restassured.RestAssured.given;

public class Test_With_Query_Param {
    @Test
            public void positive_Query_Paratm() {

       //Option1
        Response response = given().accept(ContentType.JSON)
                .and().queryParam("gender", "Female")
                .queryParam("nameConatains","a")
                .when().get("/student/search");
        response.prettyPrint();


        //Option2
        Response response1=given().accept(ContentType.JSON)
                .when().get("/student/reasch?gender=Female&nameContains=a");
    }
}
