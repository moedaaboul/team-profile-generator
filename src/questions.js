const managerQuestions = [
  {
    type: 'input',
    message: 'Enter the team manager name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter the manager employee ID',
    name: 'id',
  },
  {
    type: 'input',
    message: 'Enter the manager email address',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What the manager office number',
    name: 'officeNumber',
  },
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'Enter the employee name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter the employee ID',
    name: 'id',
  },
  {
    type: 'input',
    message: 'Enter the employee email address',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your github account name?',
    name: 'github',
  },
];

const internQuestions = [
  {
    type: 'input',
    message: 'Enter the employee name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter the employee ID',
    name: 'id',
  },
  {
    type: 'input',
    message: 'Enter the employee email address',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your school name?',
    name: 'school',
  },
];

const furtherActionQuestion = [
  {
    type: 'list',
    message: 'Add an intern or engineer or exit the application',
    name: 'action',
    choices: ['engineer', 'intern', 'exit'],
  },
];

module.exports = {
  engineerQuestions,
  internQuestions,
  managerQuestions,
  furtherActionQuestion,
};
