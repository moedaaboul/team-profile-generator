const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;

// const grace = new Intern(
//   'Grace',
//   1234,
//   'grace@email.com',
//   'University of Manchester'
// );

// console.log(grace);
// console.log(grace.getRole());
// console.log(grace.getName());
// console.log(grace.getId());
// console.log(grace.getEmail());
// console.log(grace.getSchool());
