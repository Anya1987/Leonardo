package runner;// is going to run rerun folder/failed_scenario.txt
//only will execute failed scenarios

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "@rerun/failed_scenario.txt",
		glue="stepDefinition",
		monochrome=true,
				plugin= {
						"html:cucumber-report/",
						"rerun:rerun/failed_scenario.txt"
								}
		)
public class failedRunner {

}

