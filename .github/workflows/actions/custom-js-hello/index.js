const core = require("@actions/core");
const github = require("@actions/github");
const time = new Date();

try {
  const name = core.getInput("who_to_greet");

  core.debug("Debug Message");
  core.warning("Warning message");
  core.error("Error message");

  console.log(`Hello ${name}`);

  core.setOutput("time", time.toTimeString());

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("Logging github context");
  console.log(JSON.stringify(github.context.base_ref, null, 2));
  core.endGroup();
  
} catch (error) {
  core.setFailed(error.message);
}
