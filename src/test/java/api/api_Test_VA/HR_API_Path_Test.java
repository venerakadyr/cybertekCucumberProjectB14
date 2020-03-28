package api.api_Test_VA;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.*;


public class HR_API_Path_Test {


    @BeforeClass
    public static void  setUp(){
        //set the base URI so that we dont have to type in all the  time
        RestAssured.baseURI="http://api.cybertektraining.com";
    }


    /*  //- Given accept type is Json
    //- Path param value- US
    //- When users sends request to /countries
    //- Then status code is 200
    //- And country_id is US
    //- And Country_name is United States of America
    //- And Region_id is 2
     */
    @Test
    public void test_With_Path_method(){

        Response response=given().accept(ContentType.JSON)
                .and().pathParam("id", 7432)
                .when().get("/student/{id}");


        System.out.println(response.path("students[0].studentId").toString());
        System.out.println(response.body().path("students[0].firstName").toString());

        int statusCode=response.statusCode();
//        response.prettyPrint();

        int studentID=response.path("students[0].studentId");
        String studentName=response.path("students[0].firstName").toString();

        Assert.assertEquals(200, statusCode);

        Assert.assertEquals(7432,studentID);
        Assert.assertEquals("Veromica",studentName);
        




    }
    @Test 
    public void test_With_Path_ListOFStudents(){
        Response response=get("/student/all");
        System.out.println(response.statusCode());
//        response.prettyPrint();
        
        String first1stName=response.path("students[0].firstName");
        System.out.println("name = " + first1stName);
        
        String lastFirstName=response.path("students[-1].firstName");
        System.out.println("lastFirstName = " + lastFirstName);


        
        
        
        
        
        
        
    }

}
