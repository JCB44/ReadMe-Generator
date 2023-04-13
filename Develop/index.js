// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require("fs").promises;

// TODO: Create an array of questions for user input
const questions = () => {return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description of your porject',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'installation????',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'usage????'
      },
      {
        type: 'input',
        name: 'credit',
        message: 'credit????'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a License you want to use',
        choices: ["1", "2", "3", "4"] ,
      },
      {
        type: 'input',
        name: 'tests',
        message: 'tests????'
      },
      {
        type: 'input',
        name: 'questions',
        message: 'questions????'
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
