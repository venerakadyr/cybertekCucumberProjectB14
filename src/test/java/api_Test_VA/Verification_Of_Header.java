package api_Test_VA;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.*;
import static io.restassured.RestAssured.get;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class Verification_Of_Header {

    @BeforeClass
    public static void  setUp(){
        //set the base URI so that we dont have to type in all the  time
        RestAssured.baseURI="http://api.cybertektraining.com";
    }




@Test
    public void test(){
        //request
    // get() beacuse i imported all the static from RestAssured
    //import static io.restassured.RestAssured.*;
      Response response= get("/student/all");
    System.out.println(response.statusCode());
    //verify status code
    assertEquals(200, response.statusCode());
    //verify header
    //verify contenc
    assertEquals("application/json;charset=UTF-8", response.contentType());
    System.out.println(response.getHeader("Date"));
    assertTrue(response.headers().hasHeaderWithName("Date"));
    assertEquals("1547", response.getHeader("Content-Length"));
    System.out.println("DONE");


}








}
