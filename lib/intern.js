const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.icon = 'fa-user-graduate';
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern';
  }
  getIcon() {
    return this.icon;
  }
}

module.exports = Intern;
