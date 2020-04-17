var fs = require("fs");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Please enter the title of the project : ", (answer1) => {
  rl.question("Please enter a description of the project : ", (answer2) => {
    rl.close();
  });
});
var answers = answer1.appendFile(answer2);
fs.appendFile("README.md", `${answers}`, function (err) {
  if (err) throw err;
  console.log("Saved!");
});

function init() {}

init();
