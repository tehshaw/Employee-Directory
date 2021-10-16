import Employee from "./Employee";

class Intern extends Employee{
    #school

    constructor(name, id, email, school){
        super(name, id, email)
        this.#school = school
    }

    get school(){
        return this.#school
    }

    getRole(){
        return "Intern"
    }


}

export default Intern