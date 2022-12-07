
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should return an object with name, id, email and office number', () => {
            const manager = new Manager('Alex', 5, 'alex.barlow@rocketmail.com', 1);
  
            expect(manager.name).toEqual('Alex');
            expect(manager.id).toEqual(5);
            expect(manager.email).toEqual('alex.barlow@rocketmail.com');
            expect(manager.officeNumber).toEqual(1);
        });

        it('should return the employee name', () => {
            const manager = new Manager('Alex', 5, 'alex.barlow@rocketmail.com', 1);
    
            expect(manager.getName()).toEqual('Alex');
          });
          it('should return the employee id', () => {
            const manager = new Manager('Alex', 5, 'alex.barlow@rocketmail.com',1 );
    
            expect(manager.getId()).toEqual(5);
          });
          it('should return the employee email', () => {
            const manager = new Manager('Alex', 5, 'alex.barlow@rocketmail.com',1 );
    
            expect(manager.getEmail()).toEqual('alex.barlow@rocketmail.com');
          });
          it('should return the office number', () => {
            const manager = new Manager('Alex', 5, 'alex.barlow@rocketmail.com', 1);
    
            expect(manager.officeNumber).toEqual(1);
          });
          it('should return the office number', () => {
            const manager = new Manager('Alex', 5, 'alex.barlow@rocketmail.com', 1);
    
            expect(manager.getRole()).toEqual('Manager');
          });
    })
})