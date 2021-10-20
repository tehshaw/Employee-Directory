const Employee = require("./Employee")


/** Represents Intern extending Employee
 *  @class Intern 
 *  @param {Object} obj - {name, ID, email, school}
 *  obj is output of inquirer user input
 */

class Intern extends Employee{

    constructor(obj){
        super('', '', '')
        this.school = ''

        if(obj){
            Object.assign(this, obj)
        }
        console.log("Created an Intern!");
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }

    //Returns string literal specific for Intern to build HTML
    getCard(){
        return`
        <div class="column is-one-fifth">
        <div class="card">
            <header class="card-header ">
                <p class="card-header-title">
                   ${this.name}
                </p>
            </header>
            <div class="card-content">
                <ul>
                    <li>Job Title: Intern</li>
                    <li>ID: ${this.id}</li>
                    <li>Email: ${this.email}</li>
                    <li>School: ${this.school}</li>
                </ul>    
            </div>
        </div>
        </div>
        
        `
    }


}

module.exports = Intern;