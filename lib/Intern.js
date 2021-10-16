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


}

module.exports = Intern;