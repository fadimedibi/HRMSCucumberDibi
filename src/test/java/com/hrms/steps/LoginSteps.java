package com.hrms.steps;



import org.junit.Assert;

import com.hrms.pages.LoginPageElements;
import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends CommonMethods {

	
	@Given("I open browser and navigated to the HRMS")
	public void i_open_browser_and_navigated_to_the_HRMS() {
		BaseClass.setUp();

	}

	@When("I enter valid username and valid password")
	public void i_enter_valid_username_and_valid_password() {

		
		sendText(login.username, "Admin");
		sendText(login.password, "Hum@nhrm123");
	}

	@When("I click on login button")
	public void i_click_on_login_button() {
		click(login.loginBtn);

	}

	@Then("I succesfully logged in")
	public void i_succesfully_logged_in() {
		//  Assert.assertTrue(true);
		System.out.println("I am logged in");
	}

	@When("I enter valid username and invalid password")
	public void i_enter_valid_username_and_invalid_password() {
		
		sendText(login.username, "Admin");
		sendText(login.password, "66jhhj");

	}

	@Then("I see error message")
	public void i_see_error_message() {
		boolean error = login.errorMsg.isDisplayed();
		Assert.assertTrue("Error msg is not displayed", error);
		System.out.println(login.errorMsg.getText());
	}
	
	
	@When("I enter {string} and {string}")
	public void i_enter_and(String userN, String password) throws InterruptedException {
		
		sendText(login.username, userN );
		sendText(login.password, password);
		click(login.loginBtn);
		Thread.sleep(5000);
	}

	@Then("I see {string}")
	public void i_see(String errorMsg) {
		String errmsg=login.errorMsg.getText();
		System.out.println("actual error----"+errmsg);
		System.out.println("expected-----"+errorMsg);
	    Assert.assertEquals("Error message is not displayed", errorMsg, errmsg);

	}

	@Then("I close browser")
	public void i_close_browser() {
		tearDown();
	}

}
