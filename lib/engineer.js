const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.icon = 'fa-glasses';
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
  getIcon() {
    return this.icon;
  }
}

module.exports = Engineer;
