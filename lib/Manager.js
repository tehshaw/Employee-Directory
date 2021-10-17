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
        return this.#myTeam
    }

    getCard(){
        return`
        <p class="title">
        Manager: ${this.name}
        </p>
        <p class="subtitle">
        id: ${this.id} email: ${this.email} office #: ${this.officeNum}
        </p>
        `
    }


}

module.exports = Manager;