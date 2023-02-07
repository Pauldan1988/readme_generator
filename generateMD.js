//@ts-check
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Mozilla":
      return "[![License](https://img.shields.io/badge/Mozilla-2.0-red.svg)](https://opensource.org/licenses/MPL-2.0)"
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "MIT":
      return "[![License](https://img.shields.io/badge/MIT-License-orange.svg)](https://opensource.org/licenses/MIT)"
    case "GNU AGPLv3":
      return "[![License](https://img.shields.io/badge/GNU-AGPLv3-yellow.svg)](https://spdx.org/licenses/AGPL-3.0-or-later.html)"
    default:
      return "None Provided"
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}


## License\n
${renderLicenseBadge(data.license)} 

<!-- TABLE OF CONTENTS -->

# Table of Contents

- [Description](#Description)\n
- [How to Start](#How-to-Start)\n
- [Usage](#Usage)\n
- [Roadmap](#Roadmap)\n
- [Contributions](#Contributions)\n
- [GitHub](#GitHub)\n
- [Email](#E-Mail)\n


## Description
___
${data.projDesc}

## How to Start
___
${data.gettingStarted}

## Usage
___
${data.usage}

## Roadmap

## Installation
___
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/main)
3. Commit your Changes (git commit -m 'Add some main)
4. Push to the Branch (git push origin feature/main)
5. Open a Pull Request
___
${data.roadmap}

## Contributions
___
${data.contributions}

## References

- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
- https://www.npmjs.com/package/inquirer/v/8.2.4
- https://shields.io/

# Questions

## Contact-me!
## https://www.github.com/${data.gitHubUser}
## ${data.emailUser}
`;
}

module.exports = generateMarkdown;