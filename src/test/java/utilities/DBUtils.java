package utilities;

import enum_type.DBTypeEnum;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DBUtils {

    private static Connection connection;
    private static Statement statement;
    private static ResultSet resultSet;

// create the connection with Oracle SQL
    public static void createConnection(DBTypeEnum dbTypeEnum) {


        try {
            switch (dbTypeEnum) {
                case ORACLE:

                    connection = DriverManager.getConnection(Config.getProperty("oracleURL"),
                            Config.getProperty("oracleUserName"),
                            Config.getProperty("oraclePassword"));

                case MYSQL:
                    break;
                case MONGO:
                    //create connection with mysql
                    break;

                default:
                    connection = null;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
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

    public static int getRowsCount(String query) {
        try {
            statement = connection.prepareStatement(query, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            resultSet = statement.executeQuery(query);
            //result =statement.executeQuery();
            resultSet.last();
            return resultSet.getRow();

        } catch (Exception e) {
            throw new RuntimeException(e);

        }
    }



    // close the connection
    public static void close() {
        try {
            if (statement != null) {
                statement.close();
            }
            if (connection != null) {
                connection.close();
            }

            resultSet.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }


    }
//    public static void close() throws SQLException {
//        if(statement!=null){
//            statement.close();
//        }
//        if (connection!=null) {
//            connection.close();
//        }
//
//        resultSet.close();
//    }

}

