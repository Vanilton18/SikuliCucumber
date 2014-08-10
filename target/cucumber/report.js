$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Example.feature");
formatter.feature({
  "id": "example-of-feature-with-sikuli-api",
  "description": "",
  "name": "Example of Feature with Sikuli api",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "Type WIN \"d\"",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "arguments": [
    {
      "val": "d",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.Type_WIN_(String)"
});
formatter.result({
  "duration": 568356992,
  "status": "passed"
});
formatter.scenario({
  "id": "example-of-feature-with-sikuli-api;scenario-description",
  "tags": [
    {
      "name": "@TestExample",
      "line": 6
    }
  ],
  "description": "",
  "name": "scenario description",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "Type WIN",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "Input \"Media\"",
  "keyword": "When ",
  "line": 9
});
formatter.match({
  "location": "StepDefinitions.Type_WIN()"
});
formatter.result({
  "duration": 40788527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Media",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.Digito(String)"
});
formatter.result({
  "duration": 225218720,
  "status": "passed"
});
});