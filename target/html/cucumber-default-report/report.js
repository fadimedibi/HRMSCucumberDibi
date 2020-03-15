$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddEmployee.feature");
formatter.feature({
  "name": "Add Employee",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"\u003cFirstName\u003e\", \"\u003cMiddleName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.step({
  "name": "I see Employee with \"\u003cFirstName\u003e\", \"\u003cMiddleName\u003e\" and \"\u003cLastName\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "MiddleName",
        "LastName"
      ]
    },
    {
      "cells": [
        "Morticia",
        "",
        "Addams"
      ]
    },
    {
      "cells": [
        "Wednesday",
        "W",
        "Addams"
      ]
    },
    {
      "cells": [
        "Gomez",
        "G",
        "Addams"
      ]
    },
    {
      "cells": [
        "Pugsley",
        "P",
        "Addams"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Morticia\", \"\" and \"Addams\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"Morticia\", \"\" and \"Addams\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Wednesday\", \"W\" and \"Addams\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"Wednesday\", \"W\" and \"Addams\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Gomez\", \"G\" and \"Addams\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"Gomez\", \"G\" and \"Addams\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Pugsley\", \"P\" and \"Addams\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee with \"Pugsley\", \"P\" and \"Addams\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_with_and_is_displayed(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee without employee id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Fred\", \"F\" and \"Flintstone\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete employee id",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_delete_employee_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see employee without employee id is being added",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_employee_without_employee_id_is_being_added()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee negative scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I click Save",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see required error message next to the first and last name",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_required_error_message_next_to_the_first_and_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigated_to_Add_Employee_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AddEmployee and Login Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I add \"Wilma\", \"W\" and \"Flintstone\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and_(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on create login checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_on_create_login_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Wilma\", \"@5690Wilma@9876\" and \"@5690Wilma@9876\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_enter_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Save",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee has been succesfully added",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_Employee_has_been_succesfully_added()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Hum@nhrm123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Admin\" and \"Admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Admin\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"\" and \"Hum@nhrm123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "status": "passed"
});
});