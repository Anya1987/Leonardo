package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".",//root directory , will execute everything under the feature file
		glue="stepDefinition",
		
		monochrome=true,
				tags = {"@background"},
		plugin= {
				"html:cucumber-report/",
				"rerun:rerun/failed_scenario.txt"//create txt file
						}
		)
public class testRunner {

}

