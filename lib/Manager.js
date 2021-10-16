const Employee = require("./Employee")
const Enginner = require("./Engineer")
const Intern = require("./Intern")

class Manager extends Employee{
    #myTeam = [];

    constructor(obj){
        super("", "", "")
        this.officeNum = '';

        if(obj){
            Object.assign(this, obj)
        }
        console.log("Created a manager!");
    }

    getOffice(){
        return this.officeNum;
    }

    getRole(){
        return "Manager"
    }

    addTeamMember(teammate){
        this.#myTeam.push(teammate)
    }

    getTeam(){
        this.#myTeam.forEach(person => {
            console.log(person);

        })
    }


}



module.exports = Manager;