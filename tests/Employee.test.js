const { it } = require('node:test');
const Employee = require ('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object with a name, id and email", () => {
        const employee = new Employee('Alex', 5, 'alex.barlow@rocketmail.com');
  
        expect(employee.name).toEqual('Alex');
        expect(employee.id).toEqual(5);
        expect(employee.email).toEqual('alex.barlow@rocketmail.com');
      });
  
      it('should return the employee name', () => {
        const employee = new Employee('Alex', 5, 'alex.barlow@rocketmail.com');

        expect(employee.getName()).toEqual('Alex');
      })
      it('should return the employee id', () => {
        const employee = new Employee('Alex', 5, 'alex.barlow@rocketmail.com');

        expect(employee.getId()).toEqual('5');
      })
      it('should return the employee email', () => {
        const employee = new Employee('Alex', 5, 'alex.barlow@rocketmail.com');

        expect(employee.getEmail()).toEqual('alex.barlow@rocketmail.com');
      })
      it('should return the employee role', () => {
        const employee = new Employee('Alex', 5, 'alex.barlow@rocketmail.com');

        expect(employee.getRole()).toEqual('Employee');
      })
    });
});  