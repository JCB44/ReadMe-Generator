// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title} &nbsp;
## Description

${data.description} &nbsp;
<br>
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
<br>

## Installation

${data.installation} &nbsp;
<br>

## Usage

${data.usage} &nbsp;
<br>

## Credit

${data.credit} &nbsp;
<br>




## Tests

${data.tests}
<br>

## Questions
If you have any questions or would like to report an error contact me at ${data.questions} &nbsp;

`;
// ## Contributing
// ${data.contributing} &nbsp;
// <br>
}
// ## License
// ${data.license} &nbsp;
// <br></br>


module.exports = generateMarkdown;
