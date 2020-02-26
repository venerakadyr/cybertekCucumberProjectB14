package test;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;

public class ExcelRead {
    public static void main(String[] args) throws Exception {
        File file = new File("src/Book.xlsx");
//        System.out.println(file.exists());    if path is true , it will print true
        //LOAD THE INE INTO JAVA MEMORY USING FILEINPUTSTREAM
        FileInputStream fileInputStream = new FileInputStream(file);
        //workbook->sheet->row->cell
        //Load the excel workbook into the java class
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);

        //getting the sheet from workbook
        XSSFSheet sheet = workbook.getSheet("Employees");


        //How to get Sandler from excel sheet
//        System.out.println(sheet.getRow(2).getCell(1));


        //Will count only used cells, If there are some cells not used will not count
//        int usedRows=sheet.getPhysicalNumberOfRows();


        int lastUsedRow = sheet.getLastRowNum();
        String lasyused=sheet.getRow(lastUsedRow).getCell(0).toString();
        System.out.println(lastUsedRow+" is "+lasyused);
        //will count from top to buttom
        //doesnt care if empty cell or used cell


//TODO:  string in the List all the names
//      String name="Neena";
//        ArrayList<String> list=new ArrayList<String>();
//        //Create the ArrayList to store and will be able to reach the last element
//      for(int rowNum=0;rowNum<sheet.getPhysicalNumberOfRows();rowNum++){
//         list.add(sheet.getRow(rowNum).getCell(0).toString());
//         }
//        System.out.println(list);

        // TODO: print the Neena's name dynamically

        String name = "Neena";
        for (int rowNum = 0; rowNum < sheet.getPhysicalNumberOfRows(); rowNum++) {
            if (sheet.getRow(rowNum).getCell(0).toString().equals(name)) {
                System.out.println(name);
                System.out.println(rowNum + " is row number for  " + sheet.getRow(rowNum).getCell(0).toString());


            }
        }
    }

}