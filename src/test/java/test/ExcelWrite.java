package test;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.xmlbeans.impl.values.XmlAnyTypeImpl;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;

public class ExcelWrite {
    public static void main(String[] args) throws Exception {
        XSSFWorkbook workbook;
        XSSFSheet sheet;
        XSSFRow row;
        XSSFCell cell;

        String path = "src/Book.xlsx";
        FileInputStream fileInputStream = new FileInputStream(path);

        //workbook > sheet > row > cell
        //loading excel workbook into class
        workbook=new XSSFWorkbook(fileInputStream);
        //get our sheet
        sheet=workbook.getSheet("Employees");
//        row=sheet.getRow(1);
//        cell=row.getCell(1);
//        XSSFCell adamsCell= sheet.getRow(2).getCell(0);
//        System.out.println("Before: "+adamsCell);
//        adamsCell.setCellValue("Damdam");
//        System.out.println("After: "+adamsCell);


//TODO:change the name


        String name="Steven";
        String newName="Fedya";
        for(int rowNum=0; rowNum<sheet.getPhysicalNumberOfRows();rowNum++){
            if(sheet.getRow(rowNum).getCell(0).toString().equals(name)){
                sheet.getRow(rowNum).getCell(0).setCellValue(newName);
            }
        }



//TODO;Change the job_id

        String name1="Fedya";
        String jobTitle="teacher";
        for(int rowNum=0; rowNum<sheet.getPhysicalNumberOfRows();rowNum++){
            if(sheet.getRow(rowNum).getCell(0).toString().equals(name1)){
                sheet.getRow(rowNum).getCell(2).setCellValue(jobTitle);
            }
        }



        ArrayList<String> names=new ArrayList<String>();
        //Create the ArrayList to store and will be able to reach the last element
      for(int rowNum=0;rowNum<sheet.getPhysicalNumberOfRows();rowNum++){
         names.add(sheet.getRow(rowNum).getCell(0).toString());
         }
        System.out.println(names);

        ArrayList<String> job=new ArrayList<String>();
        //Create the ArrayList to store and will be able to reach the last element
        for(int rowNum=0;rowNum<sheet.getPhysicalNumberOfRows();rowNum++){
            job.add(sheet.getRow(rowNum).getCell(2).toString());
        }
        System.out.println(job);



        //create a fileOuputStrem tp specify which file we  are writing to\
        //this block of code always has to be in the end of the class not to create any exception
        FileOutputStream fileOutputStream=new FileOutputStream(path);
        workbook.write(fileOutputStream);
        fileInputStream.close();
        fileOutputStream.close();
        workbook.close();

    }

}
