const Employee = require('../lib/employee.js');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a "name", "id" and "email" if provided valid arguments', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.name).toEqual('Tom');
      expect(employee.id).toEqual(1234);
      expect(employee.email).toEqual('employee@email.com');
    });

    it('should add a method getName()', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getName()).toEqual('Tom');
    });

    it('should add a method getId()', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getId()).toEqual(1234);
    });

    it('should add a method getEmail()', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getEmail()).toEqual('employee@email.com');
    });

    it('should add a method getRole()', () => {
      const employee = new Employee('Tom', 1234, 'employee@email.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
