// TODO: Include packages needed for this application
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input 
// inquirer.prompt() array of objects. 
const questions = [
    {
        name: "userName",
        message: "What is your full name?",
        type: "input",
    },
    
    {
        name: "projDesc",
        message: "Description of project",
        type: "input",
    },
    
    {
        name: "projDesc",
        message: "How to get started",
        type: "input",
    },

    {
        name: ""
        message: ""
        type: ""
    }
];

inquirer.prompt(questions)
.then(function (answer) {
    console.log(answer.greeting)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();