import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const name = core.getInput("who_to_greet");

  core.debug("Debug Message");
  core.warning("Warning message");
  core.error("Error message");

  console.log(`Hello ${name}`);
  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("Logging github context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();
  
} catch (error) {
  core.setFailed(error.message);
}
