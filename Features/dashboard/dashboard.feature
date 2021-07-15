

Feature: Verify the links on the dashboard
  As a valid user, I should be able to see all the valid links
@smoketest
  Scenario: Verify the links on the dashboard
  
  Given I open chrome browser
    And I visit my application
   And I enter "test.user@gmail.com.test" as username 
    And I enter "Welcome2" as password
    When I click the login button
    Then I should see the dashboard page
    And I should see Accounts link
    And I should see Home link
    And I should see Opportunity link
    And I quit the browser