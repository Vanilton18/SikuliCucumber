package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"html:target/cucumber"},
		features = {"resources"},
		glue="glue",
		tags= {"@TestExample"})

public class TestRunner {

}