const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // 1) Get some input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const disFolder = core.getInput("dist-folder", { required: true });

  // 2|) Upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${disFolder} ${s3Uri} --region ${bucketRegion}`);

  const websiteURL = `http:${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput("s3-website-url", websiteURL); // set output
}

run();
