const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Employee class", ()=>{

    describe("Initialization", () => {

        const obj = {name: "Dave", id: "44", email: "test@test.com", github: "tehshaw"};
        const engineer = new Engineer(obj)

        it("Engineer should extend Employee", () => {
            expect(engineer).toBeInstanceOf(Employee);
        })

    })

    it("Engineer name can be returned after constuction from parent class Employee", () => {
        expect(engineer.getName()).toBe("Dave");
    })

    it("Engineer id can be returned after constuction from parent class Employee", () => {
        expect(engineer.getID()).toBe("44")
    })

    it("Engineer email can be returned after constuction from parent class Employee", () => {
        expect(engineer.getEmail()).toBe("test@test.com")
    })

    it("Engineer github can be returned after constuction", () => {
        expect(engineer.getGithub()).toBe("https://github.com/tehshaw")
    })

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            expect(engineer.getRole()).toBe("Engineer")
        });
    })

    describe("getCard", () => {

        it("should return template literal with class param", () => {
            expect(engineer.getCard()).toContain(engineer.name)
            expect(engineer.getCard()).toContain(engineer.id)
            expect(engineer.getCard()).toContain(engineer.email)
            expect(engineer.getCard()).toContain(engineer.github)
            
        })

    })

})