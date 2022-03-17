// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none") {
    return "";
  }
  if (license == "MIT") {
    return `![MIT Badge](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
  if (license == "Apache") {
    return `![Apache Badge](https://img.shields.io/badge/License-${license}-orange`;
  }
  if (license == "GPLv2") {
    return `![GPLv2 Badge](https://img.shields.io/badge/License-${license}-blue`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  }
  if (license == "MIT") {
    return `https://choosealicense.com/licenses/${license}`;
  }
  if (license == "Apache") {
    return `https://choosealicense.com/licenses/${license}`;
  }
  if (license == "GPLv2") {
    return `https://choosealicense.com/licenses/${license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") return "";
  return `## License
  
  ${license} 
  
  ${renderLicenseLink(license)}

  ${renderLicenseBadge(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)

  ## Installation

   ${data.installation}

  ## Instructions for Use

   ${data.usage}

   
   ${renderLicenseSection(data.license)}

   ## Guidelines for Contribuiting

   ${data.contributing}

   ## Application Tests

   ${data.tests}

   ## FAQ

   ${data.faq}



  
`;
}

module.exports = generateMarkdown;
