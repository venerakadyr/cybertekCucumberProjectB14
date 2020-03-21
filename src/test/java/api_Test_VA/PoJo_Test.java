package api_Test_VA;

import apiModels.Student;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

public class PoJo_Test {



    @Test
    public void testPojo() throws Exception {

        Student student=new Student();
        student.setBatch(12);
        student.setFirstName("PP");
        student.setLastName("ff");
//converting to json file
        ObjectMapper mapper =new ObjectMapper();
        String json=mapper.writeValueAsString(student);
        System.out.println(json);
// converting back to java
      Student student1=mapper.readValue(json,Student.class);
        System.out.println(student1.getFirstName());
    }





}
