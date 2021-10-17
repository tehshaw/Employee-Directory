const Employee = require("./Employee")

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
        return this.github;
    }

    getRole(){
        return "Engineer"
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
                    <li>Job Title: Engineer</li>
                    <li>ID: ${this.id}</li>
                    <li>Email: ${this.email}</li>
                    <li>GitHub: https://github.com/${this.github}</li>
                </ul>    
            </div>
        </div>
        </div>
        
        `

    }

}

module.exports = Engineer;