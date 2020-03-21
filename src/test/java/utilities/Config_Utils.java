package utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Config_Utils {
    private static Properties properties;
// ypu have to instantiate your instance object using class Properties
    static{
        properties=new Properties();
        String path="configuration.properties";

        try{
            FileInputStream file=new FileInputStream(path);
            properties.load(file);
            file.close();
        }
        catch (IOException e){
            e.printStackTrace();

        }
    }


    public static String getProperty(String keyword){


     return properties.getProperty(keyword);
    }

}
