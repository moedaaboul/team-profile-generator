const inquirer = require('inquirer');

const {
  employeeQuestions,
  engineerQuestions,
  internQuestions,
  managerQuestions,
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

  // console.log({ name, id, email, role, github });
  console.log(obj);
  console.log(obj.getRole());
  console.log('Successfully created your employee list!');
};

// initialize app
init();
