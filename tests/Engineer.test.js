
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should return an object with name, id, email and github', () => {
            const engineer = new Engineer('Alex', 5, 'alex.barlow@rocketmail.com', 'AlexanderBarlow');

        expect(engineer.name).toEqual('Alex');
        expect(engineer.id).toEqual(5);
        expect(engineer.email).toEqual('alex.barlow@rocketmail.com');
        expect(engineer.github).toEqual('AlexanderBarlow');
        });

        it('should return an engineer.name', () => {
            const engineer = new Engineer('Alex', 5, 'alex.barlow@rocketmail.com', 'AlexanderBarlow');

        expect(engineer.name).toEqual('Alex');
        });

        it('should return engineer.id', () => {
            const engineer = new Engineer('Alex', 5, 'alex.barlow@rocketmail.com', 'AlexanderBarlow');

        expect(engineer.id).toEqual(5);
        });

        it('should return engineer.email', () => {
            const engineer = new Engineer('Alex', 5, 'alex.barlow@rocketmail.com', 'AlexanderBarlow');

        expect(engineer.email).toEqual('alex.barlow@rocketmail.com')
        });

        it('should return engineer.github', () => {
            const engineer = new Engineer('Alex', 5, 'alex.barlow@rocketmail.com', 'AlexanderBarlow');

        expect(engineer.github).toEqual('AlexanderBarlow');
        });

        it('should return role as engineer', () => {
            const engineer = new Engineer('Alex', 5, 'alex.barlow@rocketmail.com', 'AlexanderBarlow');

        expect(engineer.getRole()).toEqual('Engineer');
        });
    })
});