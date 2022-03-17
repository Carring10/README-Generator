// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a short description explaining your project.",
      name: "description",
    },
    // {
    //   type: "input",
    //   message: "Add a table of contents.",
    //   name: "tableOfContents",
    // },
    {
      type: "input",
      message: "What are the steps to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions for use.",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "License for Use.",
      name: "license",
      choices: ["MIT", "Apache", "GPLv2", "none"],
    },
    {
      type: "input",
      message: "Provide guidelines for contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Write tests for your application.",
      name: "tests",
    },
    {
      type: "input",
      message: "What are some FAQ?",
      name: "faq",
    },
  ])
  .then((userInput) => {
    console.log(userInput);
    writeToFile("README.md", userInput);
  })
  .catch((err) => console.log(err));

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
