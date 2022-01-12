const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.icon = 'fa-mug-hot';
  }
  getRole() {
    return 'Manager';
  }
  getIcon() {
    return this.icon;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
