package test;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Test;
import pages.Mileage_Page;
import utilities.Driver;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.DecimalFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class ExcelPOI {
    XSSFWorkbook workbook;
    XSSFSheet sheet;
    FileInputStream fileInputStream;
    FileOutputStream fileOutputStream;
    Mileage_Page mileage_page = new Mileage_Page();

    @Test
    public void gasMileageCalculatorTest() throws Exception {
        Driver.getDriver().get("https://www.calculator.net/gas-mileage-calculator.html#");
        String path = "./src/test/resources/mileage_test_data/Book 1.xlsx";

        fileInputStream = new FileInputStream(path);
        workbook = new XSSFWorkbook(fileInputStream);
        sheet = workbook.getSheet("Sheet1");

        for(int rowNum=1; rowNum<=sheet.getLastRowNum();rowNum++) {

            XSSFRow currentRow = sheet.getRow(rowNum);

            if(!currentRow.getCell(0).toString().equals("Y")){
                if (currentRow.getCell(6) == null) {
                    currentRow.createCell(6);
                }
                currentRow.getCell(6).setCellValue("SKIP REQUESTED");
            }


            double current = currentRow.getCell(1).getNumericCellValue();
//        double current = 123000;
            mileage_page.currentOdo.clear();
            mileage_page.currentOdo.sendKeys(String.valueOf(current));

            double previous = currentRow.getCell(2).getNumericCellValue();
//        double previous=12565;
            mileage_page.previousOdo.clear();
            mileage_page.previousOdo.sendKeys(String.valueOf(previous));


            double gas = currentRow.getCell(3).getNumericCellValue();
//        double gas=56;
            mileage_page.gasInput.clear();
            mileage_page.gasInput.sendKeys(String.valueOf(gas));

            mileage_page.calculateButton.click();


            double expetedResult = (current - previous) / gas;
            System.out.println("Expected result: " + expetedResult);

            String[] actualResult = mileage_page.resultInGas.getText().split(" ");
            System.out.println("Actual result: " + actualResult[0]);

            // TODO: instantiate a new Object from DesimalFormat from java
            DecimalFormat decimalFormat = new DecimalFormat("#0.00");
            //"#0.00")- saying after . give me only two numbers
            System.out.println("Formatted version: " + decimalFormat.format(expetedResult));
            //TODO: SENDING THE EXPECTED VALUE FROM OUR FORMULA

            if (currentRow.getCell(4) == null) {
                currentRow.createCell(4);
            }
            currentRow.getCell(4).setCellValue(decimalFormat.format(expetedResult));
            //======================================================================================================

            //TODO: SENDING ACTUAL RESULT THAT WE GET FROM APP
            if (currentRow.getCell(5) == null) {
                currentRow.createCell(5);
            }
            currentRow.getCell(5).setCellValue(actualResult[0]);

            //=========================================================================================================

            if (currentRow.getCell(5) == null) {
                currentRow.createCell(5);
            }
            currentRow.getCell(5).setCellValue(actualResult[0]);


            //TODO: CHECKING THE ACTUl value VS EXPECTED VALUE AND PRINTING THE VALUE
            if (String.valueOf(decimalFormat.format(expetedResult)).equals(actualResult[0])) {
                if (currentRow.getCell(6) == null) {
                    currentRow.createCell(6);
                }
                currentRow.getCell(6).setCellValue("PASS");
                System.out.println("Pass");
            } else {
                if (currentRow.getCell(6) == null) {
                    currentRow.createCell(6);
                }
                currentRow.getCell(6).setCellValue("FAIL");
                System.out.println("Fail");
            }


            //TODO: GETTING LOCALDATETIME AND PASSING INTO EXCEL

            if (currentRow.getCell(7) == null) {
                currentRow.createCell(7);
            }
            currentRow.getCell(7).setCellValue(LocalDateTime.now());
        }
        fileOutputStream = new FileOutputStream(path);
        workbook.write(fileOutputStream);
        fileInputStream.close();
        fileOutputStream.close();
        workbook.close();
        Driver.getDriver().quit();


    }
}
