package runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) // supported by JUnit
@Cucumber.Options(features = "Features", glue = "stepDefenition", // run the features file in Features folder(location
																	// of step definitions)
//and all step definition for the steps that are present in stepDef. package
		dryRun = false, // -to find unimplemented methods =true-it wont show any result in console if
						// all methods are present
		monochrome = true, // make your console readable if its true, by default-its false
	
format= {"pretty","html:target/cucumber-reports","json:target/json"},
//tags = {"@smoketest","@accounts"})//{"",""}-means AND ","=OR
//tags = {"~@regression, @smoketest,@accounts"})//run smoketest and accounts excluding regression
tags = {"@background"})
public class TestRunner {

}
