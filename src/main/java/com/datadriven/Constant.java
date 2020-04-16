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

	public static Path currentRelativePath = Paths.get("");

	public static final String Path_TestData = currentRelativePath.toAbsolutePath().toString() + File.separator
			+ "TestData" + File.separator;

	public static final String File_TestData = "testdata.xlsx";
	public static final String File_TestData1 = "testdata.xlsx";


}
