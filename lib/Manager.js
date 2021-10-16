import Employee from "./Employee";

class Manager extends Employee{
    #officeNumber

    constructor(officeNum, name, id, email){
        super(name, id, email)
        this.#officeNumber = officeNum;
    }

    getRole(){
        return "Manager"
    }


}

export default Manager