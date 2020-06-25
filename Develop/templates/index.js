const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const CURRENT_DIRECTORY_PATH = path.resolve(__dirname);
const render = require("../lib/htmlRenderer");
let IsHTMLExist = false;
let constinue = true;
let AllEmployeeArray = [];

/////This question will categorise the employee by their role
question = [
  {
    type: "list",
    name: "title",
    message: "What is your employee title",
    choices: ["Engineer", "Manager", "Intern"],
  },
];

///These functions generate/append the information into the html////
//They are all more or less the same, just customise to suit their question
const createIntern = function () {
  const Intern = require("../lib/Intern");

  questionsIntern = [
    {
      type: "input",
      name: "name",
      message: "Enter Intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter Intern's id: ",
    },
    {
      type: "input",
      name: "email",
      message: "Enter Intern's email: ",
    },
    {
      type: "input",
      name: "school",
      message: "Enter Intern's school:",
    },

    {
      type: "confirm",
      name: "again",
      message: "Enter another input? ",
      default: true,
    },
  ];

  const generateHTMLIntern = () => {
    inquirer
      .prompt(questionsIntern)
      .then((respond) => {
        const userInfo = new Intern(
          respond.name,
          respond.id,
          respond.email,
          respond.school
        );
        constinue = respond.again;

        return userInfo;
      })
      .then((userInfo) => {
        AllEmployeeArray.push(userInfo);

        //const renderIntern = render(Object.keys(userInfo));
        //fs.writeFileSync("output.html", renderIntern);

        if (constinue) {
          generateIndex();
        } else {
          const newHTML = render(AllEmployeeArray);
          fs.writeFileSync("output.html", newHTML);
        }
      });
  };

  generateHTMLIntern();
};

const createManager = function () {
  const Manager = require("../lib/Manager");

  questionsManager = [
    {
      type: "input",
      name: "name",
      message: "Enter Manager's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter Manager's id: ",
    },
    {
      type: "input",
      name: "email",
      message: "Enter Manager's email: ",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter Manager's Office Number: ",
    },
    {
      type: "confirm",
      name: "again",
      message: "Enter another input? ",
      default: true,
    },
  ];

  // /////////If User do not wish to add a new engineer, continue will be false

  // //////////
  const generateHTMLManager = () => {
    inquirer
      .prompt(questionsManager)
      .then((respond) => {
        const userInfo = new Manager(
          respond.name,
          respond.id,
          respond.email,
          respond.officeNumber
        );
        constinue = respond.again;

        return userInfo;
      })
      .then((userInfo) => {
        AllEmployeeArray.push(userInfo);

        //const renderManager = render(Object.keys(userInfo));
        //fs.writeFileSync("output.html", renderManager);

        if (constinue) {
          generateIndex();
        } else {
          const newHTML = render(AllEmployeeArray);
          fs.writeFileSync("output.html", newHTML);
        }
      });
  };
  generateHTMLManager();
};

const createEngineer = function () {
  const Engineer = require("../lib/Engineer");

  questionsEngineer = [
    {
      type: "input",
      name: "name",
      message: "Enter Engineer's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter Engineer's id: ",
    },
    {
      type: "input",
      name: "email",
      message: "Enter Engineer's email: ",
    },
    {
      type: "input",
      name: "github",
      message: "Enter Engineer's github: ",
    },
    {
      type: "confirm",
      name: "again",
      message: "Enter another input? ",
      default: true,
    },
  ];

  const generateHTMLEngineer = () => {
    inquirer
      .prompt(questionsEngineer)
      .then((respond) => {
        const userInfo = new Engineer(
          respond.name,
          respond.id,
          respond.email,
          respond.github
        );
        constinue = respond.again;

        return userInfo;
      })
      .then((userInfo) => {
        AllEmployeeArray.push(userInfo);

        if (constinue) {
          generateIndex();
        } else {
          const newHTML = render(AllEmployeeArray);
          fs.writeFileSync("output.html", newHTML);
        }
      });
  };
  generateHTMLEngineer();
};

// ///////////////////
const generateIndex = () => {
  inquirer.prompt(question).then((data) => {
    if (data.title === "Intern") {
      createIntern();
    } else if (data.title === "Manager") {
      createManager();
    } else {
      createEngineer();
    }
  });
};

generateIndex();

// /////////////////
