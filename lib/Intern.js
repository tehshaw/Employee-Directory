const Employee = require("./Employee")

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