package stepDefenition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BaseClass;

public class LoginTest extends BaseClass {

	@Before(value = "@accounts", order = 0) // hooks-reomove cookis, executions prior to your scenario
	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\juan_\\Desktop\\Selenium files\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@After(value = "@accounts", order = 0) // hooks
	public void closeBrowser() {
		driver.close();
	}

	@Before(value = "@accounts", order = 1) // hooks
	public void visitApp() {
		System.out.println("order 1 @Before got executed");
	}

	@After(value = "@accounts", order = 1) // hooks
	public void printClosure() {
		System.out.println("Scenario completed @After got executed");
	}

	@Given("^I open chrome browser$")
	public void I_open_chrome_browser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\juan_\\Desktop\\Selenium files\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@Given("^I visit my application$")
	public void I_visit_my_application() {
		driver.get("https://login.salesforce.com");
	}

	@Given("^I enter \"([^\"]*)\" as username$")
	public void I_enter_as_username(String username) {
		driver.findElement(By.id("username")).sendKeys(username);
	}

	@Given("^I enter \"([^\"]*)\" as password$")
	public void I_enter_as_password(String password) {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^I click the login button$")
	public void I_click_the_login_button() {
		driver.findElement(By.id("Login")).click();
	}

	@Then("^I should see the dashboard page$")
	public void I_should_see_the_dashboard_page() {
		boolean homePage = driver.findElement(By.xpath("//a[@title='Home Tab - Selected']")).isDisplayed();
		Assert.assertTrue(homePage);
	}

	@Given("^I enter invalid username$")
	public void I_enter_invalid_username() {
		driver.findElement(By.id("username")).sendKeys("test.ussdfsdfer@gmail.com.test");
	}

	@Given("^I enter invalid password$")
	public void I_enter_invalid_password() {
		driver.findElement(By.id("password")).sendKeys("test.user@gmail.com.test");
	}

	@Then("^I should see an error message$")
	public void I_should_see_an_error_message() {
		String expectedMessage = "Please check your username and password. If you still can't log in, contact your Salesforce administrator.";
		String actualMessage = driver.findElement(By.id("error")).getText();
		Assert.assertEquals(expectedMessage, actualMessage);
	}

	@Then("^I quit the browser$")
	public void I_quit_the_browser() {
		driver.quit();
	}
}