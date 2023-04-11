// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require("fs").promises;

// TODO: Create an array of questions for user input
const questions = () => {return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
]);
}
// TODO: Create a function to write README file
// ??

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((readmeContent) => writeFile('README.md', generateMarkdown(readmeContent)))
    .then(() => console.log('successfully created README.md!'))
    .catch((err) => console.error(err));

}


init();
