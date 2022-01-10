const inquirer = require('inquirer');

const {
  employeeQuestions,
  engineerQuestions,
  internQuestions,
  managerQuestions,
  furtherActionQuestions,
} = require('./src/questions');

const { Engineer, Intern, Manager } = require('./lib');

let employees = [];

const init = async () => {
  const { name, id, email, role } = await inquirer.prompt(employeeQuestions);
  let github;
  let school;
  let officeNumber;
  let obj;
  let inProgress = true;
  if (role === 'engineer') {
    ({ github } = await inquirer.prompt(engineerQuestions));
    obj = new Engineer(name, id, email, github);
  }
  if (role === 'intern') {
    ({ school } = await inquirer.prompt(internQuestions));
    obj = new Intern(name, id, email, school);
  }
  if (role === 'manager') {
    ({ officeNumber } = await inquirer.prompt(managerQuestions));
    obj = new Manager(name, id, email, officeNumber);
  }

  employees.push(obj);

  const { action } = await inquirer.prompt(furtherActionQuestions);
  if (action) {
    await init();
    return employees;
  }
  console.log(employees);
  return employees;
  console.log('Successfully created your employee list!');
};

// initialize app
init();
