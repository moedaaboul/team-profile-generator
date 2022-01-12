const Manager = require('../lib/manager.js');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with the following properties "name", "id", "email" and "officeNumber" if valid arguments are provided', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.name).toEqual('Tom');
      expect(manager.id).toEqual(1234);
      expect(manager.email).toEqual('employee@email.com');
      expect(manager.officeNumber).toEqual(333);
    });

    it('should create an object with the "icon" property which returns "fa-mug-hot"', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.icon).toEqual('fa-mug-hot');
    });

    it('should create an object with a "getName()" method which returns "name" if a valid argument was provided', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getName()).toEqual('Tom');
    });

    it('should create an object with a "getId()" method which returns the "Id" if a valid argument was provided', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getId()).toEqual(1234);
    });

    it('should create an object with a "getEmail()" method which returns the "Email" if a valid argument was provided', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getEmail()).toEqual('employee@email.com');
    });

    it('should add a getRole() method which returns "Manager" which is the Class name', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getRole()).toEqual('Manager');
    });

    it('should add a method getIcon() which returns the font awesome icon to be assigned to an Engineer card', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getIcon()).toEqual('fa-mug-hot');
    });

    it('should add a method getOfficeNumber() which returns the officeNumber', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getOfficeNumber()).toEqual(333);
    });
  });
});
