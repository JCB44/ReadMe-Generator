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
        message: 'What Instalations are required?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide a guide to how your project can be used'
      },
      // {
      //   type: 'list',
      //   name: 'license',
      //   message: 'Choose a License you want to use',
      //   choices: ["1", "2", "3", "4"] ,
      // },
      {
        type: 'input',
        name: 'credit',
        message: 'Enter the contributors to your project'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests are there and how do you run them?'
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Provide an emial, discord, phone number. Any contact info for questions'
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
