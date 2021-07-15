package stepDefenition;

import cucumber.api.java.en.Then;
import utilities.BaseClass;

public class DashboardTest extends BaseClass{
	@Then("^I should see Accounts link$")
	public void I_should_see_Accounts_link()  {
	   System.out.println("I should see Accounts link");
	}

	@Then("^I should see Home link$")
	public void I_should_see_Home_link() {
	System.out.println("I should see Home link");    
	}

	@Then("^I should see Opportunity link$")
	public void I_should_see_Opportunity_link()  { 	    
	}
	
}
