const Intern= require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should return an object with name, id, email and school', () => {
            const intern = new Intern('Alex', 5, 'alex.barlow@rocketmail.com', 'UPENN');
  
            expect(intern.name).toEqual('Alex');
            expect(intern.id).toEqual(5);
            expect(intern.email).toEqual('alex.barlow@rocketmail.com');
            expect(intern.school).toEqual('UPENN');
        });

        it('should return an intern.name', () => {
            const intern = new Intern('Alex', 5, 'alex.barlow@rocketmail.com',  'UPENN');
  
            expect(intern.name).toEqual('Alex');
        });

        it('should return intern.id', () => {
            const intern = new Intern('Alex', 5, 'alex.barlow@rocketmail.com',  'UPENN');
  
            expect(intern.id).toEqual(5);
        });

           it('should return intern.email', () => {
            const intern = new Intern('Alex', 5, 'alex.barlow@rocketmail.com',  'UPENN');
  
            expect(intern.email).toEqual('alex.barlow@rocketmail.com');
        });

           it('should return intern.school', () => {
            const intern = new Intern('Alex', 5, 'alex.barlow@rocketmail.com',  'UPENN');

            expect(intern.school).toEqual('UPENN');
        });
    })
})