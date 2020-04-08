package test;

import enum_type.DBTypeEnum;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import utilities.DBUtils;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class DBTest {
    @BeforeClass
    public static void setup(){
        DBUtils.createConnection(DBTypeEnum.ORACLE);
    }


    @Test
    public void testEmployeeCount(){
        int employeeCount= DBUtils.getRowsCount("select * from student");
        System.out.println("studentCount: "+employeeCount);
        int expectedEmpCount=204;
        Assert.assertEquals(expectedEmpCount,employeeCount);
        System.out.println("Assert passed");
    }



    @Test
    public void printEmployee(){

    try {
        List<Map<Object, Object>> myData = DBUtils.executeQuery("select employee_id, first_name, last_name from employees");
        for (Map<Object, Object> map : myData) {
            System.out.println(map);
        }
    }catch (SQLException e) {
        e.printStackTrace();
    }


    }
    @AfterClass
    public  static void cleanup(){
        DBUtils.close();
    }



   //    DBUtils.createConnection(DBTypeEnum.ORACLE);
//        List<Map<Object,Object>>  myData= DBUtils.executeQuery("select employee_id, first_name, last_name from employees");
//        DBUtils.close();
//
//        for(Map<Object,Object> map: myData){
//            System.out.println(map);
//        }

}


