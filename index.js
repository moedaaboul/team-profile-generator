const inquirer = require('inquirer');

const {
  employeeQuestions,
  engineerQuestions,
  internQuestions,
  managerQuestions,
} = require('./src/questions');

let employees = [];

const init = async () => {
  const answers = await inquirer.prompt(employeeQuestions);
  //   if (answers.role)
  console.log(employeeQuestions);
  console.log('Successfully created your professional README!');
};

// initialize app
init();
