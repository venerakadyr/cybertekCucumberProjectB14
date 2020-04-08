package utilities;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Log {
    private static Logger logger= LogManager.getLogger(Log.class);
    //private because no one can have an access outside from this class
    //static it belongs to the cass
    //creating a logger object from Logs class itself

    public static void start(String testName){
        logger.info("Scenario start point: "+testName);
        //"Scenario start point: "+testName customise scenario starting

    }

    public static void info(String message){
        logger.info(message);
    }

    public static void warn(String message){
        logger.warn(message);
    }

    public static  void error(String message){
        logger.error(message);
    }
}
