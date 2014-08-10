package glue;

import org.sikuli.script.Key;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class StepDefinitions extends StepDef {
	@Given("^Type WIN \"([^\"]*)\"$")
	public void Type_WIN_(String tx) throws Throwable {
		s.type(tx,Key.META);
	}

	@Given("^Type WIN$")
	public void Type_WIN() throws Throwable {
		s.type(Key.WIN);
	}

	@When("^Input \"([^\"]*)\"$")
	public void Digito(String txt) throws Throwable {
		s.type(txt);
	}

}
