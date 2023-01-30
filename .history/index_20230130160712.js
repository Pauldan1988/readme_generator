// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")





//Table of contents
//Get License info for MIT, Apache, Mozilla, GPL
//badges
//credits
// https://www.markdownguide.org/getting-started/
// https://shields.io/
// https://www.npmjs.com/package/inquirer/v/8.2.4
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide







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
        message: "What is the road Map for your project?",
        type: "input",
    },

    {
        name: "license",
        message: "Pick your license",
        type: "list",
        choices: ["MIT", "Apache", "Mozilla", "GPL"],
    },
];

inquirer.prompt(questions)
.then(function (answer) {
    fs.
    // console.log(answer)
})
// TODO: Create a function to write README file
