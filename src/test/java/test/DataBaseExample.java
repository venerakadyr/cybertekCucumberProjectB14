package test;

import com.google.gson.internal.bind.util.ISO8601Utils;
import org.w3c.dom.ls.LSOutput;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DataBaseExample {
    public static void main(String[] args) {
        //URL=ec2-18-216-74-246.us-east-2.compute.amazonaws.com
        //PORT=1521
        //SID=xe
        //username=hr
        //password=hr
        // String url = "jdbc:oracle:thin:@yoururl:1521:xe";
        String url = "jdbc:oracle:thin:@ec2-18-216-74-246.us-east-2.compute.amazonaws.com:1521:xe";
        String username = "hr";
        String password = "hr";


        //THREE CLASSES WE NEED FPR TESTING DATABASE
        //conncetion => create a connection
        //statement-  write sql query
        //resultset- result will be stored here => NEW DATATYTPE


        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            // creating the connection with sql
            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            //creating the statement  with connection and write some queries
            ResultSet resultSet = statement.executeQuery("select first_name, last_name, salary, job_id from employees");


            //we will get information of our resultset, like how many columns and name of the column and so on
            ResultSetMetaData metaData = resultSet.getMetaData();
            int numberOfColumns = metaData.getColumnCount();
            String columnName1 = metaData.getColumnName(1);
            //REturning first name
            String columnName2 = metaData.getColumnName(2);
            //REturning last name
            System.out.println("Index cof 1 column Name:" + columnName1);
            System.out.println("Index cof 2 column Name:" + columnName2);
            System.out.println("Numbers of columns: " + numberOfColumns);


            List<Map<Object, Object>> data = new ArrayList<>();
            //Creating  main LIST to store all the info as a map

            int number = 1;
            while (resultSet.next()) {
                //creating new map so each iteration it will create new map and store the info
                Map<Object, Object> map = new HashMap<>();
                for (int i = 1; i <= numberOfColumns; i++) {
                    map.put(metaData.getColumnName(i), resultSet.getObject(i));
                }
                //adding to main DATA LIST
                data.add(map);
            }


            System.out.println("Successfully connected!");
            connection.close();
            statement.close();
            resultSet.close();
            //after opening and connecting has to be closedx

            //printing the each map from DATA LIST
            for (Map<Object, Object> map : data) {
                System.out.println(map);
            }
        } catch (SQLException e) {
            System.out.println("Connection failed!");
        }


    }
    //=========================================================
    //resultSet.next()-----> looping each row
    //resultSet.next()
    //resultSet.next()===> Hardcoding
    //            System.out.println("Index 1: " + resultSet.getObject(1));
    //            System.out.println("Index 2: " + resultSet.getObject(2));
    //==================================================================
    //    String value1 = (String) resultSet.getObject(1);
//                String value2 = (String) resultSet.getObject(2);
//
//
//                System.out.println(number + "=>First Name: " + value1 + "/ Last Name: " + value2);
//                number++;
//            }
//======================================================================================================
//      int number = 1;
//            while (resultSet.next()) {
//                for (int i = 1; i <= numberOfColumns; i++) {
//                    System.out.print(metaData.getColumnName(i)+": "+resultSet.getObject(i) + " ");
//                }
//                System.out.println();
//            }
}
