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
  const cards = employees
    .map((e) => {
      return generateCard(e);
    })
    .join('');
  const html = renderHtml(cards);
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
  const finalArray = await runFurtherActionQuestion();
  return finalArray;
};

const runFurtherActionQuestion = async () => {
  let { action } = await inquirer.prompt(furtherActionQuestion);
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
  return employees;
};

// initialize app
init();
