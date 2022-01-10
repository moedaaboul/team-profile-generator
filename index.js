const inquirer = require('inquirer');

const {
  employeeQuestions,
  engineerQuestions,
  internQuestions,
  managerQuestions,
} = require('./src/questions');

let employees = [];

const init = async () => {
  const { name, id, email, role } = await inquirer.prompt(employeeQuestions);
  let github;
  if (role === 'engineer') {
    ({ github } = await inquirer.prompt(engineerQuestions));
  }
  console.log({ name, id, email, role, github });
  console.log('Successfully created your employee list!');
};

// initialize app
init();
