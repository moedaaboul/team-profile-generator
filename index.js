const inquirer = require('inquirer');
const writeToFile = require('./src/file');
const css = require('./src/css');
const generateCard = require('./src/card');
const renderHtml = require('./src/renderHtml');

const {
  employeeQuestions,
  engineerQuestion,
  internQuestion,
  managerQuestion,
  furtherActionQuestion,
} = require('./src/questions');

const { Engineer, Intern, Manager } = require('./lib');

let employees = [];

const runQuestions = async () => {
  const { name, id, email, role } = await inquirer.prompt(employeeQuestions);
  let github;
  let school;
  let officeNumber;
  let obj;
  // let inProgress = true;
  if (role === 'engineer') {
    ({ github } = await inquirer.prompt(engineerQuestion));
    obj = new Engineer(name, id, email, github);
  }
  if (role === 'intern') {
    ({ school } = await inquirer.prompt(internQuestion));
    obj = new Intern(name, id, email, school);
  }
  if (role === 'manager') {
    ({ officeNumber } = await inquirer.prompt(managerQuestion));
    obj = new Manager(name, id, email, officeNumber);
  }

  employees.push(obj);

  const { action } = await inquirer.prompt(furtherActionQuestion);
  if (action) {
    await runQuestions();
  }
  return employees;
};

const init = async () => {
  const employees = await runQuestions();
  const string = employees.forEach((e) => {
    console.log('-----------');
    console.log(e.name);
    console.log(e.getRole());
    console.log(`ID: ${e.id}`);
    console.log(`Email: ${e.email}`);
    if (e.getRole() === 'Engineer') {
      console.log(e.getGithub());
    }
    if (e.getRole() === 'Intern') {
      console.log(e.getSchool());
    }
    if (e.getRole() === 'Manager') {
      console.log(e.officeNumber);
    }
  });
  const cards = employees
    .map((e) => {
      return generateCard(e.name, e.id, e.email, e.getIcon(), e.getRole());
    })
    .join('');
  console.log(cards);
  const html = renderHtml(cards);
  console.log(html);
  writeToFile('./dist/index.html', html);
  writeToFile('./dist/styles.css', css);
  console.log('Successfully created your employee list!');
};

// initialize app
init();
