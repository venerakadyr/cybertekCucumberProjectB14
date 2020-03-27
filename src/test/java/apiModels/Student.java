package apiModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@JsonIgnoreProperties(ignoreUnknown = true)

public class Student {
    private String studentId;
    private String firstName;
    String lastName;
    int batch;
    String joinDate;
    int birthday;
    String gender;
    Contact contact;
    Company company;


}
