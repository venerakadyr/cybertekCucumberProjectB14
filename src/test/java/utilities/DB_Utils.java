package utilities;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DB_Utils {

    private static Connection connection;
    private static Statement statement;
    private static ResultSet resultSet;

// create the connection with Oracle SQL
    public static void createConnection() throws SQLException {
        switch (Config_Utils.getProperty("dbType")) {
            case "oracle":

                connection = DriverManager.getConnection(Config_Utils.getProperty("oracleURL"),
                        Config_Utils.getProperty("oracleUserName"),
                        Config_Utils.getProperty("oraclePassword"));

            case "mysql":
                //create connection with mysql
                break;
            default:
                connection = null;
        }
    }




    //to create a query
    public static List<Map<Object, Object>> executeQuery (String query) throws SQLException {
        statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        resultSet = statement.executeQuery(query);
        ResultSetMetaData metaData = resultSet.getMetaData();
        int numberOfColumns = metaData.getColumnCount();
        List<Map<Object, Object>> data = new ArrayList<>();
        while(resultSet.next()){
            Map<Object, Object> map = new HashMap<>();
            for(int i = 1; i <= numberOfColumns; i++ ){
                map.put(metaData.getColumnName(i), resultSet.getObject(i));
            }
            data.add(map);
        }
        return data;
    }





    // close the connection
    public static void close() throws SQLException {
        if(statement!=null){
            statement.close();
        }
        if (connection!=null) {
            connection.close();
        }

        resultSet.close();
    }

}

