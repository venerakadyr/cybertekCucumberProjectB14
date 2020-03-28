package jdbc;

import utilities.DBUtils;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class TestDBUtility {
    public static void main(String[] args) throws SQLException {
        DBUtils.createConnection();
        List<Map<Object,Object>>  myData= DBUtils.executeQuery("select employee_id, first_name, last_name from employees");
        DBUtils.close();

        for(Map<Object,Object> map: myData){
            System.out.println(map);
        }






    }

}
