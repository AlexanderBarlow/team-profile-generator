const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./src/generate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

//use inquirer to create prompt for user
const manager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: "What is the name of the manager(must provide)?",
            name: 'name',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('A manager name is required!');
                }
            }
        },
        {
            type: 'input',
            message: 'Enter an ID.',
            name: 'id',
            validate: nameInput => {
                if (nameInput === NaN) {
                    console.log('Please provide an id');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter an email.',
            name: 'email',
            validate: nameInput => {
                if (nameInput === '') {
                    console.log('You must provide an email!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: `What is the manager's office number?`,
            name: officeNumber,
            validate: nameInput => {
                if(nameInput === NaN) {
                    console.log("Enter an office number.");
                    return false;
                }else {
                    return true;
                }
            }
        }
    ])
    .then(managerInfo => {
        const name = managerInfo.name;
        const id = managerInfo.id;
        const email = managerInfo.email;
        const officeNumber = managerInfo.officeNumber;

        const manager = new Manager(name, id, email, officeNumber);

        roleChoices.push(manager);
    })
}