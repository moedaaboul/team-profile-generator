const Intern = require('../lib/intern.js');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with the following properties "name", "id", "email" and "github" if valid arguments are provided', () => {
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
      expect(intern.school).toEqual('Grammar School');
    });

    it('should create an object with the "icon" property which returns "fa-user-graduate"', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.icon).toEqual('fa-user-graduate');
    });

    it('should create an object with a "getName()" method which returns "name" if a valid argument was provided', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getName()).toEqual('Tom');
    });

    it('should create an object with a "getId()" method which returns the "Id" if a valid argument was provided', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getId()).toEqual(1234);
    });

    it('should create an object with a "getEmail()" method which returns the "Email" if a valid argument was provided', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getEmail()).toEqual('employee@email.com');
    });

    it('should add a getRole() method which returns "Intern" which is the Class name', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getRole()).toEqual('Intern');
    });

    it('should add a method getIcon() which returns the font awesome icon to be assigned to an Engineer card', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getIcon()).toEqual('fa-user-graduate');
    });

    it('should add a method getSchool()', () => {
      const intern = new Intern(
        'Tom',
        1234,
        'employee@email.com',
        'Grammar School'
      );
      expect(intern.getSchool()).toEqual('Grammar School');
    });
  });
});
