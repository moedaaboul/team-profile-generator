const Manager = require('../lib/manager.js');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with a "name", "id" and "email" if provided valid arguments', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.name).toEqual('Tom');
      expect(manager.id).toEqual(1234);
      expect(manager.email).toEqual('employee@email.com');
    });

    it('should add a method getName()', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getName()).toEqual('Tom');
    });

    it('should add a method getId()', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getId()).toEqual(1234);
    });

    it('should add a method getEmail()', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getEmail()).toEqual('employee@email.com');
    });

    it('should add a method getRole()', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.getRole()).toEqual('Manager');
    });

    it('should add a method getIcon()', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.icon).toEqual('fa-mug-hot');
      expect(manager.getIcon()).toEqual('fa-mug-hot');
    });

    it('should add a method getOfficeNumber()', () => {
      const manager = new Manager('Tom', 1234, 'employee@email.com', 333);
      expect(manager.officeNumber).toEqual(333);
      expect(manager.getOfficeNumber()).toEqual(333);
    });
  });
});
