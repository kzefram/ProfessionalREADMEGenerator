// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generatemd = require('./generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        question: "What is the name of your repository?"
    },
    {
        type: "input",
        name: "description",
        question: "What is the description of your repository? What does it do?"
    },
    {
        type: "input",
        name: "license",
        question: "What type of license does your repository have?",
        options: ["MIT", "BSD3", "Boost1.0"]
    },
    {
        type: "input",
        name: "require",
        question: "Does your repository have any dependencies? Please, use N/A if you do not."
    },
    {
        type: "input",
        name: "usage",
        question: "Please, explain the usage of your repository."
    },
    {
        type: "input",
        name: "installation",
        question: "Does your repository need to be installed and what are those instructions?  Please, use N/A if you do not."
    },
    {
        type: "input",
        name: "credits",
        question: "Please, list all that have been involved in this repository."
    },
    {
        type: "input",
        name: "features",
        question: "Does your repository have any features that should be mentioned? Please, use N/A if you do not."
    },
    {
        type: "input",
        name: "contribution",
        question: "Can developers contribute to your repository and if so, please explain how? Please, use N/A if you do not."
    },
    {
        type: "input",
        name: "testing",
        question: "Can developers do any testing and if so, what type of tests? Please, use N/A if you do not."
    },
    {
        type: "input",
        name: "badges",
        question: "Do you have any badges to add? Please, use N/A if you do not."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),  fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then ((responses) => {
        console.log('Passing your information to creat README file.');
        writeToFile("./output/README.md".generatemd({ ... responses}));
    });
}

// Function call to initialize app
init();
