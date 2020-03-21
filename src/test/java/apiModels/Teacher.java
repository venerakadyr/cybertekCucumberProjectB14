package apiModels;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@JsonIgnoreProperties(ignoreUnknown=true)
@Data
public class Teacher {
    //model class NOt suppose to have any methods, anything
    // instance variable can be private and public
    int salary;
    int batch;
    String firstName;
    String lastName;
    String emailAddress;
    String joinDate;
    String gender;
    String birthDate;

    String subject;
    String section;
    String password;
    String phone;
    String department;
    String premanentAddress;



//Requirement coming from Swagger
//"batch": 0,
//  "birthDate": "2020-03-18T01:06:05.603Z",
//  "department": "string",
//  "emailAddress": "string",
//  "firstName": "string",
//  "gender": "string",
//  "joinDate": "2020-03-18T01:06:05.603Z",
//  "lastName": "string",
//  "password": "string",
//  "phone": "string",
//  "premanentAddress": "string",
//  "salary": 0,
//  "section": "string",
//  "subject": "string",
//  "teacherId": 0


}
