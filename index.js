const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./src/generate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const roleChoices = [];

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
            name: 'officeNumber',
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
};

const  employee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            message: 'What is the role of the employee?',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'Enter the employee name.',
            name: 'name', 
            validate: nameInput => {
                if(nameInput === '') {
                    console.log("Enter a name.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter employee id.',
            name: 'id', 
            validate: nameInput => {
                if(nameInput === NaN) {
                    console.log("Enter a valid ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter employee email',
            name: 'email',
            validate: nameInput => {
                if(nameInput === '') {
                    console.log('Please enter an email.');
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            message: 'Would you like another team member?',
            name: 'addEmployee',
            default: false
        }
    ])
    .then(data => {
        let role = data.role
        let name = data.name;
        let id = data.id;
        let email = data.email;
        let addEmployee = data.addEmployee
        let employee;

        //CREATE CONDITIONALS TO APPLY GATHERED TO CORRECT ROLES
        if(role === 'Engineer') {
            employee =new Engineer(name, id, email);
        } else if(role === 'Intern') {
            employee = new Intern(name, id, email);
        }

        roleChoices.push(employee);
        
        //CREATE CONDITIONAL TO RETURN THE USER TO THE PROMPT IF THEY CHOOSE TO ADD ANOTHER EMPLOYEE OR CLOSE IF THE DO NOT
        if(addEmployee) {
            return employee(roleChoices);
        } else {
            return roleChoices;
        }
    })
};

//ABOVE LOGIC PROMPTS THE USER TO GATHER VALUES USING INQUIRER
//BELOW WE NEED TO CREATE AN INDEX.HTML USING WRITEFILE
const writeFile = data => {
    fs.writeFile('./dists/index.html', data, err => {
        // IF THERE IS AN ERROR LOG IT
        if (err) {
            console.log(err);
            return;
        // IF THERE IS NO ERROR LOG SUCCESS
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

manager()
  .then(employee)
  .then(roleChoices => {
    return generate(roleChoices);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });