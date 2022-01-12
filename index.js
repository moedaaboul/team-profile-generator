const inquirer = require('inquirer');
const writeToFile = require('./src/file');
const css = require('./src/css');
const generateCard = require('./src/card');
const renderHtml = require('./src/renderHtml');

const {
  engineerQuestions,
  internQuestions,
  managerQuestions,
  furtherActionQuestion,
} = require('./src/questions');

const { Engineer, Intern, Manager } = require('./lib');

let employees = [];

const init = async () => {
  const employees = await runQuestions();
  // const string = employees.forEach((e) => {
  //   console.log('-----------');
  //   console.log(e.name);
  //   console.log(e.getRole());
  //   console.log(`ID: ${e.id}`);
  //   console.log(`Email: ${e.email}`);
  //   if (e.getRole() === 'Engineer') {
  //     console.log(e.getGithub());
  //   }
  //   if (e.getRole() === 'Intern') {
  //     console.log(e.getSchool());
  //   }
  //   if (e.getRole() === 'Manager') {
  //     console.log(e.officeNumber);
  //   }
  // });
  const cards = employees
    .map((e) => {
      return generateCard(e);
    })
    .join('');
  // console.log(cards);
  const html = renderHtml(cards);
  // console.log(html);
  writeToFile('./dist/index.html', html);
  writeToFile('./dist/styles.css', css);
  console.log('Successfully created your employee list!');
};

const runQuestions = async () => {
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  let obj = new Manager(name, id, email, officeNumber);
  employees.push(obj);
  // console.log(obj);
  // console.log(employees);
  const finalArray = await runFurtherActionQuestion();
  return finalArray;
};

const runFurtherActionQuestion = async () => {
  let { action } = await inquirer.prompt(furtherActionQuestion);
  // console.log(action);
  if (action === 'intern') {
    let { name, id, email, school } = await inquirer.prompt(internQuestions);
    obj = new Intern(name, id, email, school);
    employees.push(obj);
    await runFurtherActionQuestion();
  } else if (action === 'engineer') {
    let { name, id, email, github } = await inquirer.prompt(engineerQuestions);
    obj = new Engineer(name, id, email, github);
    employees.push(obj);
    await runFurtherActionQuestion();
  }
  // console.log(employees);
  return employees;
};

// initialize app
init();
