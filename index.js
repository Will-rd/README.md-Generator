// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generated = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
 const questions = [

        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'

        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe your project to someone?'

        },
        {
            type: 'input',
            name: 'installation',
            message: 'What would the user need to install to use and/or view your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how someone would use your project.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Were there any contributors to this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can you test the functionality of your project??'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How can users contact you?'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'none']
        },
    ]
    
   
    
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const genny = generateMarkdown(data);
    // fs.writeFile('README.md', genny, (err) =>
    // err ? console.log(err) : console.log('Successfully created README!'))
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
 }

// TODO: Create a function to initialize app
 function init() { 
    inquirer.prompt(questions).then((inquirerResponses) => {writeToFile('README.md', generated({...inquirerResponses}))})
 }

// Function call to initialize app
 init();

// title, description, installation instructions,
// usage information, contribution guidelines,
// and test instructions, license choices