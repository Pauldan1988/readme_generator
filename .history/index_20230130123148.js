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
        message: "Type out a description of your project",
        type: "input",
    },
    
    {
        name: "gettingStarted",
        message: "How to get started",
        type: "input",
    },

    {
        name: "usage",
        message: "Which use does this project have?",
        type: "input",
    },

    {
        name: "contributions",
        message: "What are the contribution guidelines",
        type: "input",
    },

    {
        name: "gitHubUser",
        message: "What is your GitHub Username?",
        type: "input",
    },

    {
        name: "emailUser",
        message: "What is your Email Address?",
        type: "input",
    },

    {
        name: "roadmap",
        message: "What is the road",
        type: "input",
    },
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