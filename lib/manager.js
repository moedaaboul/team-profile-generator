const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

const grace = new Manager('Grace', 1234, 'grace@email.com', 12341234);

console.log(grace);
console.log(grace.getRole());
console.log(grace.getName());
console.log(grace.getId());
console.log(grace.getEmail());
