package api.apiModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@JsonIgnoreProperties(ignoreUnknown=true)
@Data

public class API_RequestBody {
    int salary;
    int batch;
    int teacherId;
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
    String studentId;
    Contact contact;
    Company company;

}
