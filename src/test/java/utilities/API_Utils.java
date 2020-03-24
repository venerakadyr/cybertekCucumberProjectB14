package utilities;

import apiModels.API_RequestBody;
import apiModels.API_ResponseBody;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

public class API_Utils {
    //CRUD Operation. One method for each operation
    //One method should handle any API we are hitting
    private static API_ResponseBody responseLISTBody;



    public static API_ResponseBody getResponseLISTBody() {
        return responseLISTBody;
    }


    /** READING*/
    public static void hitGET(String resource) {
        //requesting get dome kind of data reading and validating data
        String url = Config.getProperty("apiBaseURL") + resource;
        Response response = RestAssured.get(url);
//          Response response = RestAssured.given().header("secretKey","28fuggu");

        System.out.println(response.asString());
//        response.prettyPrint();
//        Assert.assertEquals("Get API hit failed", 200, response.statusCode());
        System.out.println("Status code: " + response.statusCode());

        ObjectMapper mapper = new ObjectMapper();

        try {
            responseLISTBody = mapper.readValue(response.asString(), API_ResponseBody.class);

        } catch (Exception j) {
            j.printStackTrace();

        }
    }


//     public static void hitGET(String resource) {
//        String uri = Config.getProperty("baseURL") + resource;
//        Response response = RestAssured.get(uri);
////        Response response = RestAssured.given().header("authenticationKey","secretPassword").get(uri);      this is how you would pass with authentication key
//        System.out.println(response.asString());
//        System.out.println("Status code: " + response.statusCode());
//        ObjectMapper objectMapper = new ObjectMapper();
//        try {
//            responseBody = objectMapper.readValue(response.asString(), ResponseBody.class);
//        } catch (Exception j) {
//            j.printStackTrace();
//        }

    /** CREATING*/
    public static void hitPOST(String resource, API_RequestBody body) {
        String uri = Config.getProperty("apiBaseURL") + resource;

        ObjectMapper mapper = new ObjectMapper();
        String bodyJSON = "";

        try {
            bodyJSON = mapper.writeValueAsString(body);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


        Response response = RestAssured.given().contentType(ContentType.JSON).body(bodyJSON).when().post(uri);
        System.out.println(response.asString());
        Assert.assertEquals("GET API hit failed", 200, response.statusCode());

        try {
            responseLISTBody = mapper.readValue(response.asString(), API_ResponseBody.class);
        } catch (Exception j) {
            j.printStackTrace();
        }


    }

    /** DELETING*/
    public static void hitDELETE(String resource) {
        String uri = Config.getProperty("apiBaseURL") + resource;

        Response response = RestAssured.delete(uri);
        System.out.println(response.asString());
        System.out.println("Status code: " + response.statusCode());

        //Successful message catcher part
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            responseLISTBody = objectMapper.readValue(response.asString(), API_ResponseBody.class);
        } catch (Exception j) {
            System.err.println("WARNING!\nResponse couldn't  map properly with Jackson library");
            ;
        }
    }



    /** UPDATING*/
    public static void hitPUT(String resource, API_RequestBody body) {
        //i bouil the uri
        String uri = Config.getProperty("apiBaseURL") + resource;

        // our object in Java but api works only with JSON
        //with help of OBjectAMpper and convert to JSON
        ObjectMapper mapper = new ObjectMapper();
        String bodyJSON = "";


        //we store the object in the String bodyJSon
        //if we have any exception we will know about it
        try {
            bodyJSON = mapper.writeValueAsString(body);
        } catch (Exception e) {
            e.printStackTrace();
        }


        // hit the API  with ready JSON file
        Response response = RestAssured.given().contentType(ContentType.JSON).body(bodyJSON).when().post(uri);
        //printing the response  body
        System.out.println(response.asString());
        System.out.println("UPDATE STATUS CODE: " + response.statusCode());


        // response will be back in JSON and converted in java and store in responseLISTBody
        //if you want to get any info we can use getResponse()
        try {
            responseLISTBody = mapper.readValue(response.asString(), API_ResponseBody.class);
        } catch (Exception e) {
            e.printStackTrace();


        }


    }

}