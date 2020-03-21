package jdbc;

import utilities.DB_Utils;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class TestDBUtility {
    public static void main(String[] args) throws SQLException {
        DB_Utils.createConnection();
        List<Map<Object,Object>>  myData= DB_Utils.executeQuery("select employee_id, first_name, last_name from employees");
        DB_Utils.close();

        for(Map<Object,Object> map: myData){
            System.out.println(map);
        }






    }

}
