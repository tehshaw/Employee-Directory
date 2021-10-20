const Employee = require("./Employee")
const Enginner = require("./Engineer")
const Intern = require("./Intern")


/** Creates a new Intern extending Employee
 *  @class Intern
 *  @param {Object} obj - {name, ID, email, officeNum} - obj is output of inquirer user input
 *  @
 */
class Manager extends Employee{
    #myTeam = [];

    constructor(obj){
        super("", "", "")
        this.officeNum = '';

        if(obj){
            Object.assign(this, obj)
            console.log("Created a manager!");
        }else{
            throw new Error("Manager not created")
        }
        
    }

    getOffice(){
        return this.officeNum;
    }

    getRole(){
        return "Manager"
    }

    /**
     * Takes generates classes of Enginner or Intern and adds to team
     * 
     * @param {Class} teammate - Enginner or Intern class instance
     */
    addTeamMember(teammate){
        this.#myTeam.push(teammate)
    }

    getTeam(){
        return this.#myTeam
    }

    //Returns string literal specific for Manager to build HTML
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