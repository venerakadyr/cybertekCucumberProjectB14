package test;

import org.w3c.dom.CDATASection;
import utilities.DBUtility;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class TestDBUtility {
    public static void main(String[] args) throws SQLException {
        DBUtility.createConnection();
        List<Map<Object,Object>>  myData=DBUtility.executeQuery("select employee_id, first_name, last_name from employees");
        DBUtility.close();

        for(Map<Object,Object> map: myData){
            System.out.println(map);
        }






    }

}
