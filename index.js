// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generatemd = require('./generateMarkdown.js');
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
        type: "list",
        name: "license",
        question: "What type of license does your repository have?",
        choices: ["MIT", "BSD3", "Boost1.0"]
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


// TODO: Create a function to initialize app
// asnyc function init() {
//     inquirer
//         .createPromptModule(questions); 
//         await;
//         .then((responses) => {
//             console.log('Passing your information to create README file.');
//             writeToFile("./output/README.md".generatemd({ ... responses}));
    
//             const file = generatemd(responses);
//             writeToFile("./output/README.md", file);
//     });
// }

function writeToFile(fileName, data) {
    // Use path.join() method to join the segments of a file path
    const filePath = path.join(process.cwd(), fileName);
  
    // Use fs.writeFile() method to write data to the file
    fs.writeFile(filePath, data, (err) =>
      err ? console.log(err) : console.log("File created!")
    );
  }

// writing to the md file
async function init() {
    const prompt = inquirer.createPromptModule();
    const responses = await prompt(questions);
    console.log("Passing your information to create README file.");
    const markdown = generatemd(responses)
    writeToFile("./output/README.md", markdown);
  }

// Function call to initialize app
init();
