Feature: Test the login functionality
  As an authenticated user I should be able to login to the application

  Background: 
    Given I open chrome browser
    And I visit my application
  @background
  Scenario: Using valid credentials I should be able to login to my application
    And I enter "test.user@gmail.com.test" as username
    And I enter "Welcome2" as password
    When I click the login button
    Then I should see the dashboard page
    And I quit the browser
    
  @background
  Scenario: Using in-valid credentials, I should not be able to login to my application
    And I enter "test.fake@gmail.com.test" as username
    And I enter "WrondPassword" as password
    When I click the login button
    Then I should see an error message
    And I quit the browser
    

  