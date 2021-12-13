const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');

const results = []

const run = () => {
    console.log('Welcome to the team generator! \n\nUse npm reset to reset the dist/ folder \n')
    runInquirer()
}

const managerPrompts = () => {
    inquirer
    .prompt([{
        type: 'input',
        message: "What is your team manager's name",
        name: 'manager_name'
    },
    {
        type: 'input',
        message: "What is your team manager's id?",
        name: 'manager_id'
    },
    {
        type: 'input',
        message: "What is your team manager's email?",
        name: 'manager_email'
    },
    {
        type: 'input',
        message: "What is your team manager's office phone number?",
        name: 'manager_office_number'
    }
    ]).then(({manager_id, manager_name, manager_email, manager_office_number}) =>{
        const manager = new Manager(manager_id, manager_name, manager_email, manager_office_number)

        if(manager){
            results.push(manager) 
            getNextMember()
        }
    })
}

const engineerPrompts = () => {
    inquirer
    .prompt([{
        type: 'input',
        message: "What is your team engineer's name",
        name: 'engineer_name'
    },
    {
        type: 'input',
        message: "What is your team engineer's id?",
        name: 'engineer_id'
    },
    {
        type: 'input',
        message: "What is your team engineer's email?",
        name: 'engineer_email'
    },
    {
        type: 'input',
        message: "What is your team engineer's Github username?",
        name: 'engineer_github'
    }
    ]).then(({engineer_id, engineer_name, engineer_email, engineer_github}) =>{
        const engineer = new Engineer(engineer_id, engineer_name, engineer_email, engineer_github)

        if(engineer){
            results.push(engineer) 
            getNextMember()
        }
    })
}

const internPrompts = () => {
    inquirer
    .prompt([{
        type: 'input',
        message: "What is your team intern's name",
        name: 'intern_name'
    },
    {
        type: 'input',
        message: "What is your team intern's id?",
        name: 'intern_id'
    },
    {
        type: 'input',
        message: "What is your team intern's email?",
        name: 'intern_email'
    },
    {
        type: 'input',
        message: "What is your team intern's school name?",
        name: 'intern_school'
    }
    ]).then(({intern_id, intern_name, intern_email, intern_school}) =>{
        const intern = new Intern(intern_id, intern_name, intern_email, intern_school)

        if(intern){
            results.push(intern) 
            getNextMember()
        }
    })
}

const getNextMember = () => {
    inquirer
    .prompt([{
        type: 'list',
        message: "Which team member would you like to add next?",
        name: 'member_pick',
        choices: [
            'Engineer',
            'Intern',
            'I dont want to add any more team members'
        ]
    }
    
    ]).then(({member_pick}) =>{


        switch(member_pick){
            case 'Engineer':
                return engineerPrompts()
            case 'Intern':
                return internPrompts()
            case 'I dont want to add any more team members':
                let generatedHtml = generateHtml(results)
                fs.writeFileSync('./dist/dashboard.html', generatedHtml)
                console.log("Congrats your team profile has been generated inside of the 'dist' folder")
                break 
        }
    })
}

const runInquirer = () => {
    managerPrompts()
}


run()