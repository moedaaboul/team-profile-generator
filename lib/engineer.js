const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;

// const grace = new Engineer(
//   'Grace',
//   1234,
//   'grace@email.com',
//   'engineer@github.com'
// );

// console.log(grace);
// console.log(grace.getRole());
// console.log(grace.getName());
// console.log(grace.getId());
// console.log(grace.getEmail());
// console.log(grace.getGithub());
