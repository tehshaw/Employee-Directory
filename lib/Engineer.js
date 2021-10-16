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

}

module.exports = Engineer;