const employeeQuestions = [
  {
    type: 'input',
    message: 'What is your employee name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your employee id?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your employee email',
    name: 'email',
  },
  {
    type: 'list',
    message: 'What is your employee role',
    name: 'role',
    choices: ['engineer', 'intern', 'manager'],
  },
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is your github account name?',
    name: 'github',
  },
];

const internQuestions = [
  {
    type: 'input',
    message: 'What is your school name?',
    name: 'school',
  },
];

const managerQuestions = [
  {
    type: 'input',
    message: 'What is your office number?',
    name: 'officeNumber',
  },
];

const furtherActionQuestions = [
  {
    type: 'confirm',
    message: 'Would you like to exit or continue adding an employee',
    name: 'action',
  },
];

module.exports = {
  employeeQuestions,
  engineerQuestions,
  internQuestions,
  managerQuestions,
  furtherActionQuestions,
};
