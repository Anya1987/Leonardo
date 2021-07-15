$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test the login functionality",
  "description": "As an authenticated user I should be able to login to the application",
  "id": "test-the-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 2452950000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_my_application()"
});
formatter.result({
  "duration": 3947700700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Using valid credentials I should be able to login to my application",
  "description": "",
  "id": "test-the-login-functionality;using-valid-credentials-i-should-be-able-to-login-to-my-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"test.user@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Welcome2\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_username(String)"
});
formatter.result({
  "duration": 248297300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome2",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_password(String)"
});
formatter.result({
  "duration": 247295100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 360611500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_dashboard_page()"
});
formatter.result({
  "duration": 3914837100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 763591700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 1270109300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_visit_my_application()"
});
formatter.result({
  "duration": 2375764000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Using in-valid credentials, I should not be able to login to my application",
  "description": "",
  "id": "test-the-login-functionality;using-in-valid-credentials,-i-should-not-be-able-to-login-to-my-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter \"test.fake@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"WrondPassword\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test.fake@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_username(String)"
});
formatter.result({
  "duration": 260365100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WrondPassword",
      "offset": 9
    }
  ],
  "location": "LoginTest.i_enter_as_password(String)"
});
formatter.result({
  "duration": 649156600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 253010800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 4387089000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser()"
});
formatter.result({
  "duration": 787921600,
  "status": "passed"
});
});