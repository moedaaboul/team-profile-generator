const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a "name", "id", "email" if provided valid arguments', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.name).toEqual('Tom');
      expect(engineer.id).toEqual(1234);
      expect(engineer.email).toEqual('employee@email.com');
      expect(engineer.icon).toEqual('fa-glasses');
    });

    it('should add a method getName()', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getName()).toEqual('Tom');
    });

    it('should add a method getId()', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getId()).toEqual(1234);
    });

    it('should add a method getEmail()', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getEmail()).toEqual('employee@email.com');
    });

    it('should add a method getRole()', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getRole()).toEqual('Engineer');
    });

    it('should add a method getIcon()', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getIcon()).toEqual('fa-glasses');
    });
  });
});
