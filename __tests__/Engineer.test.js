const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with the following properties "name", "id", "email" and "github" if valid arguments are provided', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.name).toEqual('Tom');
      expect(engineer.id).toEqual(1234);
      expect(engineer.email).toEqual('employee@email.com');
      expect(engineer.github).toEqual('github');
    });

    it('should create an object with the "icon" property which returns "fa-glasses"', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.icon).toEqual('fa-glasses');
    });

    it('should create an object with a "getName()" method which returns "name" if a valid argument was provided', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getName()).toEqual('Tom');
    });

    it('should create an object with a "getId()" method which returns the "Id" if a valid argument was provided', () => {
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

    it('should add a getRole() method which returns "Engineer" which is the Class name', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getRole()).toEqual('Engineer');
    });

    it('should add a method getIcon() which returns the font awesome icon to be assigned to an Engineer card', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getIcon()).toEqual('fa-glasses');
    });

    it('should add a method getGithub()', () => {
      const engineer = new Engineer(
        'Tom',
        1234,
        'employee@email.com',
        'github'
      );
      expect(engineer.getGithub()).toEqual('github');
    });
  });
});
