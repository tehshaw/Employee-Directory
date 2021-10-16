import Employee from "./Employee";

class Engineer extends Employee{
    #github

    constructor(github, name, id, email){
        super(name, id, email)
        this.#github = github
    }

    get github(){
        return this.#github;
    }

    getRole(){
        return "Engineer"
    }

}

export default Engineer