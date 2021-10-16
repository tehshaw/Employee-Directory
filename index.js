const fs = require("fs")
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager")

let theManager;

async function init(){


    console.log("Welcome to the employee database.\nPlease follow the prompts to proceed.\n");

    theManager = new Manager (await addPerson(managerQuestion));

    await addEmployee();

    theManager.getTeam();


}





async function addPerson(specialQuestion){
      
    let answers;
    try{
        answers = await inquirer.prompt(genericQuestions.concat(specialQuestion))
    }
    catch(error){
        console.log(error);
    }
    finally{
        return answers;
    }
}


async function addEmployee(){

    let answers;
    try{
        answers = await inquirer.prompt(employeeQuestions)
    }
    catch(error){
        console.log(error);
    }
    finally{
        switch (answers.addPerson){

            case "Engineer":
                theManager.addTeamMember(new Engineer(await addPerson(engineerQuestion)))
                await addEmployee();
                break;
            case "Intern":
                theManager.addTeamMember(new Engineer(await addPerson(internQuestion)))
                await addEmployee();
                break;
            default:
                return -1;

        }

    }

}

const genericQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter employee name",
        validate(value) {
            const valid = isNaN(value);
            return valid || "Answer can not be blank."
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter id number",
        validate(value) {
            const valid = isNaN(value);
            return valid || "Answer can not be blank."
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter email address",
        validate(value) {
            const valid = isNaN(value);
            return valid || "Answer can not be blank."
        }
    },

]

const managerQuestion = [
    {
        type: 'input',
        name: 'officeNum',
        message: "Enter office number"
    },

]
const engineerQuestion = [
    {
        type: 'input',
        name: 'github',
        message: "Enter github username"
    },

]
const internQuestion = [
    {
        type: 'input',
        name: 'school',
        message: "Enter school name"
    },

]

const employeeQuestions = [
    {
        type: 'list',
        name: 'addPerson',
        message: "Choose an employee to add:",
        choices: ["Engineer" , "Intern", "done"],
        
    },
]


init();