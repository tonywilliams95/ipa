package com.datadriven;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Added Comment Additionally
 */
public class Constant {

	public static final String URL = "http://www.store.demoqa.com";

	public static final String Username = "testuser_1";

	public static final String Password = "Test@123";
	public static final String Username1 = "testuser_1";

	public static final String Password2 = "Test@123";
	/*Added by Babu
	 */
	public static final String Password3 = "Test@123";
	public static Path currentRelativePath = Paths.get("");

	public static final String Path_TestData = currentRelativePath.toAbsolutePath().toString() + File.separator
			+ "TestData" + File.separator;

	public static final String File_TestData = "testdata.xlsx";
	public static final String File_TestData6 = "testdata.xlsx";
	/*
	 * Added by tony
	 */
	public static final String FileExcel = "testdata.xlsx";

	/*
	*Added method by babu
	*/
	public static void setExcelFile(String Path,String SheetName) throws Exception {

		try {

			// Open the Excel file

		FileInputStream ExcelFile = new FileInputStream(Path);

		// Access the required test data sheet

		ExcelWBook = new XSSFWorkbook(ExcelFile);

		ExcelWSheet = ExcelWBook.getSheet(SheetName);

		} catch (Exception e){

			throw (e);

		}

	/*
	 *Added method by babu
	 */
	public static void setExcelFile(String Path,String SheetName) throws Exception {

		try {

			// Open the Excel file

			FileInputStream ExcelFile5 = new FileInputStream(Path);
			// Access the required test data sheet1

			// Access the required test data sheet

			ExcelWBook = new XSSFWorkbook(ExcelFile5);

			ExcelWSheet = ExcelWBook.getSheet(SheetName);

		} catch (Exception e){

			throw (e);

		}

	}


}
	
	
}
