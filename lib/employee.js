class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;

// Creates two unique characters using the "character" constructor
// const grace = new Employee('Grace', 1234, 'grace@email.com');
// console.log(grace);
// console.log(grace.getRole());
// console.log(grace.getName());
// console.log(grace.getId());
// console.log(grace.getEmail());
