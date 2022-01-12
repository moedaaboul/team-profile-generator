const Employee = require('../lib/employee.js');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with the following properties "name", "id" and "email" if valid arguments are provided', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.name).toEqual('Tom');
      expect(employee.id).toEqual(1234);
      expect(employee.email).toEqual('employee@email.com');
    });

    it('should create an object with a "getName()" method which returns "name" if a valid argument was provided', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getName()).toEqual('Tom');
    });

    it('should create an object with a "getId()" method which returns the "Id" if a valid argument was provided', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getId()).toEqual(1234);
    });

    it('should create an object with a "getEmail()" method which returns the "Email" if a valid argument was provided', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getEmail()).toEqual('employee@email.com');
    });

    it('should add a getRole() method which returns "Employee" which is the Class name', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
