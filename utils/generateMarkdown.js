

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

 if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
 } else if (license === 'GNU GPLv3') {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
 } else if ( license === 'Apache License 2.0') {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
 } else {
  return ``
 }

 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 

  if(license === 'MIT') {
    return `[MIT Link](https://opensource.org/license/mit/)`
  } else if (license === 'GNU GPLv3') {
    return `[GNU Link](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if (license === 'Apache License 2.0') {
    return `[Apache Link](https://www.apache.org/licenses/LICENSE-2.0)`
  } else {
    return 'N/A'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if(license !== 'none') {
    return `## License`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}     ${renderLicenseBadge(data.license)}
 ## Description
${data.description}
 ## Installation
 ${data.installation}
## Usage
${data.usage}
## Contributions
${data.contributions}
## Test Instructions
${data.test}
## Questions
Email me with any questions at ${data.questions}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

  

`;
}

module.exports = generateMarkdown;



// ${renderLicenseBadge(data.license)}


// title, description, installation instructions,
// usage information, contribution guidelines,
// and test instructions