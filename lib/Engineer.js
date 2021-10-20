const Employee = require("./Employee")

/** Represents Enginner extending Employee
 *  @class Engineer 
 *  @param {Object} obj - {name, ID, Email, Github}
 *  obj is output of inquirer user input
 */

class Engineer extends Employee{

    constructor(obj){
        super('', '', '')
        this.github = ''

        if(obj){
            Object.assign(this, obj)
        }
        console.log("Created an Engineer!");
    }

    getGithub(){
        return `https://github.com/${this.github}`
    }

    getRole(){
        return "Engineer"
    }


    //Returns string literal specific for Engineer to build HTML
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
                    <li>Job Title: Engineer</li>
                    <li>ID: ${this.id}</li>
                    <li>Email: ${this.email}</li>
                    <li>GitHub: ${this.github}</li>
                </ul>    
            </div>
        </div>
        </div>
        
        `

    }

}

module.exports = Engineer;