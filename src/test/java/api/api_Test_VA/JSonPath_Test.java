package api.api_Test_VA;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Test;

public class JSonPath_Test {
    @Test
    public void singleStudent(){

// hit the api usig restassured
      Response response=RestAssured.get("http://api.cybertektraining.com/student/7432");
//       Response response=RestAssured.get("http://api.cybertektraining.com/student/all");
        System.out.println(response.statusCode());
//        System.out.println(response.asString());

response.prettyPrint();

        JsonPath jp=response.jsonPath();
        int batch=jp.get("students[0].batch");
        String name=jp.get("students[0].major");
        String phone=jp.get("students[0].contact.phone");
        System.out.println(batch+"\n"+name+"\n"+phone);



        }

        @Test
    public void allStudents(){
        Response response =RestAssured.get("http://api.cybertektraining.com/teacher/all");
            System.out.println(response.statusCode());
            System.out.println(response.asString());

            JsonPath js=response.jsonPath();
            //getting all the teacher and checking if the gender  field is empty or not
            int size=js.getList("teachers").size();
            System.out.println(size);
            int counter=0;
            for(int i=0;i<=size;i++){
                counter++;
                String path ="teachers["+i+"].gender";
                String gender=js.getString(path);
                System.out.println();
//                System.out.println("Teachers gender is: "+gender);
                if(gender!=null){
                System.out.println(i+": PASS");

//                System.out.println(i+"-"+gender.isEmpty());
                //if the gender is null
            }else{
                    System.out.println("Index of failed object: "+counter);
                }
            }

        }



    }

