function generateProjectUrl(github, title) {
  var caseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${caseTitle}`;
}
function renderBadge(license, github, title) {
  if (license !== "none") {
    return `[![GitHub License](http://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(
      github,
      title
    )})`;
  }
  return "";
}
function renderSection(license) {
  if (license !== "none") {
    return "This project is licensed";
  }
  return "";
}
function generateMarkdown(data) {
  return `
    # ${data.title}
    ${renderBadge(data.license, data.github, data.title)}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    To install necessary dependencies, run the following command:
    \`\`\`
    ${data.installation}
    \'\'\'

    ## Usage

    ${data.usage}

    ${renderSection(data.license)}
    ## Contributing
    ${data.contributing}

    ## Tests

    To run tests, run the following command:

    \`\`\`
    ${data.test}
    \`\`\`

    ## Questions 
    If you have any questions about the repo, open an issue or contact [${
      data.github
    }](${data.url}) directly at ${data.email}.

    `;
}
module.exports = generateMarkdown;
