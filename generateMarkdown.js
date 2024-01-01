// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "N/A") {
    return "[https://choosealicense.com/](https://choosealicense.com/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "N/A") {
    return `## License

      This repository is licensed under the ${license} license. For more information, please, click this link: [https://choosealicense.com/](https://choosealicense.com/)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Contents
[Description](#description)
[Dependencies](#require)
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)
[Badges](#badges)
[Features](#features)
[Contribution](#contribution)
[Tests](#tests)

## Description

${data.description}

## Dependencies

${require}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Badges

${badges}

## Features

${features}

## Contributions

${contribution}

## Tests

${testing}

`;
}

module.exports = generateMarkdown;
