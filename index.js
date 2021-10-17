const fs = require("fs")
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

let theManager;

async function init(){


    console.log("Welcome to the employee database.\nPlease follow the prompts to proceed.\n");

    theManager = new Manager (await addPerson(managerQuestion));

    await addEmployees();

    buildSite();

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

async function addEmployees(){

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
                theManager.addTeamMember(new Intern(await addPerson(internQuestion)))
                await addEmployee();
                break;
            default:
                return -1;

        }

    }

}

function buildSite() {
    let thisManager = theManager.getCard();
    let team = theManager.getTeam()
    let teamCards = team.map((emp) => {
            return emp.getCard()
    });
  
    fs.writeFile("./dist/index.html", theWebsite(thisManager,teamCards.toString()), (err) => {
        if (err) throw err;
        console.log("The file has been saved");
    })

    fs.writeFile("./dist/style.css", theCSS() , (err) => {
        if (err) throw err;
        console.log("The file has been saved");
    })

    
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
        // validate(value) {
        //     const valid = Number.isInteger(value)
        //     return valid || "Answer must be a number."
        // }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter email address",
        // validate(value) {
        //     const valid = isNaN(value);
        //     return valid || "Answer can not be blank."
        // }
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

function theWebsite(thisManager, ...teamCards) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Andada+Pro&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    
    
    <title>Employee Directory</title>
</head>
<body>

    <header class="hero">
        <div class="hero-body">
        ${thisManager}
        </div>
    </header>

    <section>
        <div class="columns is-two-thirds is-flex is-justify-content-center is-flex-wrap-wrap">
           ${teamCards}
        </div>
    </section>  

    
</body>
</html>


`;
}

function theCSS() { 
    return`
.hero-body{
    background-color: #479E54;
}

.card-header{
    background-color: #9E374F;
}

.card-content{
    background-color: #A6FFB3;
}

li{
    margin: 1%;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
}

section{
    margin: 2rem;
}`

 }


init();