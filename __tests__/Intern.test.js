const Intern = require('../lib/intern.js');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a "name", "id" and "email" and icon if provided valid arguments', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.name).toEqual('Tom');
      expect(intern.id).toEqual(1234);
      expect(intern.email).toEqual('employee@email.com');
      expect(intern.icon).toEqual('fa-user-graduate');
    });

    it('should add a method getName()', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getName()).toEqual('Tom');
    });

    it('should add a method getId()', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getId()).toEqual(1234);
    });

    it('should add a method getEmail()', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getEmail()).toEqual('employee@email.com');
    });

    it('should add a method getRole()', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getRole()).toEqual('Intern');
    });

    it('should add a method getIcon()', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getIcon()).toEqual('fa-user-graduate');
    });
  });
});
