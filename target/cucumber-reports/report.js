$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "I want to use test the login functionality using valid and in valid credentials",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 2731243900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_visit_my_application()"
});
formatter.result({
  "duration": 2642000700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Using valid credentials I should be able to login to my application",
  "description": "",
  "id": "test-login-functionality;using-valid-credentials-i-should-be-able-to-login-to-my-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"test.user@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Welcome2\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
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
  "location": "LoginTest.I_enter_as_username(String)"
});
formatter.result({
  "duration": 169202300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome2",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_password(String)"
});
formatter.result({
  "duration": 115907199,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 2309605800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_dashboard_page()"
});
formatter.result({
  "duration": 2905600199,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_quit_the_browser()"
});
formatter.result({
  "duration": 936363100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 1297639500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_visit_my_application()"
});
formatter.result({
  "duration": 2297686800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Using in-valid credentials, I should not be able to login to my application",
  "description": "",
  "id": "test-login-functionality;using-in-valid-credentials,-i-should-not-be-able-to-login-to-my-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter \"test.fake@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"WrondPassword\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
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
  "location": "LoginTest.I_enter_as_username(String)"
});
formatter.result({
  "duration": 249738200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WrondPassword",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_password(String)"
});
formatter.result({
  "duration": 130097801,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 5940490599,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_an_error_message()"
});
formatter.result({
  "duration": 246261999,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_quit_the_browser()"
});
formatter.result({
  "duration": 689245500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 1522428800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_visit_my_application()"
});
formatter.result({
  "duration": 2294730300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Using anounymous user I should be able to visit the application",
  "description": "",
  "id": "test-login-functionality;using-anounymous-user-i-should-be-able-to-visit-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 1484572300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_visit_my_application()"
});
formatter.result({
  "duration": 3754773600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Using in-valid credentials, I should not be able to login to my application",
  "description": "",
  "id": "test-login-functionality;using-in-valid-credentials,-i-should-not-be-able-to-login-to-my-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I enter \"test.fake@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \"WrondPassword\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should see an error message",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test.fake@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_username(String)"
});
formatter.result({
  "duration": 223299100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WrondPassword",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_password(String)"
});
formatter.result({
  "duration": 249638699,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 9642965000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_an_error_message()"
});
formatter.result({
  "duration": 243356101,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 1386738300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_visit_my_application()"
});
formatter.result({
  "duration": 3201795501,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create Account using Data Table",
  "description": "",
  "id": "test-login-functionality;create-account-using-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I enter \"test.user@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter \"Welcome2\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I should see the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I create and save the Account",
  "rows": [
    {
      "cells": [
        "Account Name",
        "Account Number",
        "Account Site",
        "Active",
        "Annual Revenue",
        "Account Source"
      ],
      "line": 37
    },
    {
      "cells": [
        "Waqas 123",
        "12345",
        "www.codegator.us",
        "Yes",
        "100000",
        "Web"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click the \"Edit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should see the following values for the \"00N2E00000D7LOy\" field",
  "rows": [
    {
      "cells": [
        "--None--"
      ],
      "line": 41
    },
    {
      "cells": [
        "No"
      ],
      "line": 42
    },
    {
      "cells": [
        "Yes"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should see the following values for the \"AccountSource\" field",
  "rows": [
    {
      "cells": [
        "--None--"
      ],
      "line": 45
    },
    {
      "cells": [
        "Web"
      ],
      "line": 46
    },
    {
      "cells": [
        "Phone Inquiry"
      ],
      "line": 47
    },
    {
      "cells": [
        "Partner Referral"
      ],
      "line": 48
    },
    {
      "cells": [
        "Purchased List"
      ],
      "line": 49
    },
    {
      "cells": [
        "Other"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_username(String)"
});
formatter.result({
  "duration": 307151501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome2",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_password(String)"
});
formatter.result({
  "duration": 158156300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 2079814599,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_dashboard_page()"
});
formatter.result({
  "duration": 4080432701,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_create_and_save_the_Account(DataTable)"
});
formatter.result({
  "duration": 5944973099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 13
    }
  ],
  "location": "AccountTest.I_click_the_button(String)"
});
formatter.result({
  "duration": 583656600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00N2E00000D7LOy",
      "offset": 43
    }
  ],
  "location": "AccountTest.I_should_see_the_following_values_for_the_field(String,DataTable)"
});
formatter.result({
  "duration": 131322499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountSource",
      "offset": 43
    }
  ],
  "location": "AccountTest.I_should_see_the_following_values_for_the_field(String,DataTable)"
});
formatter.result({
  "duration": 2407005099,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 1626972900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_visit_my_application()"
});
formatter.result({
  "duration": 2657297600,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Create and Save Account records",
  "description": "",
  "id": "test-login-functionality;create-and-save-account-records;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I enter \"test.user@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter \"Welcome2\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I should see the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I click the \"Accounts\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click the \"New\" button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter \"Waqas\" in the account name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_username(String)"
});
formatter.result({
  "duration": 140872600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome2",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_password(String)"
});
formatter.result({
  "duration": 150803601,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 2867052500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_dashboard_page()"
});
formatter.result({
  "duration": 2959853400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts",
      "offset": 13
    }
  ],
  "location": "AccountTest.I_click_the_tab(String)"
});
formatter.result({
  "duration": 271116000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 13
    }
  ],
  "location": "AccountTest.I_click_the_button(String)"
});
formatter.result({
  "duration": 1003485700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Waqas",
      "offset": 9
    }
  ],
  "location": "AccountTest.I_enter_in_the_account_name_field(String)"
});
formatter.result({
  "duration": 1638684300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 13
    }
  ],
  "location": "AccountTest.I_click_the_button(String)"
});
formatter.result({
  "duration": 574542600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I visit my application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.I_open_chrome_browser()"
});
formatter.result({
  "duration": 2875837900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_visit_my_application()"
});
formatter.result({
  "duration": 3721753900,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Verify active drop down field is present",
  "description": "",
  "id": "test-login-functionality;verify-active-drop-down-field-is-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@background"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I enter \"test.user@gmail.com.test\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I enter \"Welcome2\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should see the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I click the \"Accounts\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click the \"New\" button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_username(String)"
});
formatter.result({
  "duration": 319522400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome2",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_as_password(String)"
});
formatter.result({
  "duration": 120596700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 113503899,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_dashboard_page()"
});
formatter.result({
  "duration": 3986815101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts",
      "offset": 13
    }
  ],
  "location": "AccountTest.I_click_the_tab(String)"
});
formatter.result({
  "duration": 419821300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 13
    }
  ],
  "location": "AccountTest.I_click_the_button(String)"
});
formatter.result({
  "duration": 1219748801,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});