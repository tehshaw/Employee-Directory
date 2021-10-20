const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Employee class", ()=>{


    it("Intern should extend Employee", () => {
        const obj = {name: "Dave", id: "44", email: "test@test.com", school: "Harvard"};

        const intern = new Intern(obj)
        expect(intern).toBeInstanceOf(Employee);

    })

    it("Intern name can be returned after constuction from parent class Employee", () => {
        const obj = {name: "Dave", id: "44", email: "test@test.com", school: "Harvard"};

        const intern = new Intern(obj)
        expect(intern.getName()).toBe("Dave");

    })

    it("Intern id can be returned after constuction from parent class Employee", () => {
        const obj = {name: "Dave", id: "44", email: "test@test.com", school: "Harvard"};

        expect(new Intern(obj).getID()).toBe("44")
    })

    it("Intern email can be returned after constuction from parent class Employee", () => {
        const obj = {name: "Dave", id: "44", email: "test@test.com", school: "Harvard"};

        expect(new Intern(obj).getEmail()).toBe("test@test.com")
    })

    it("Intern school can be returned after constuction", () => {
        const obj = {name: "Dave", id: "44", email: "test@test.com", school: "Harvard"};

        expect(new Intern(obj).getSchool()).toBe("Harvard")
    })


    describe("getRole", () => {
        it("getRole will return 'Intern' to match class name", () => {
            expect(new Intern().getRole()).toBe("Intern")
        });
    })

    describe("getCard", () => {

        it("getCard will return template literal to build HTML including passed param", () => {
            const obj = {name: "Dave", id: "44", email: "test@test.com", school: "Harvard"};

            const intern = new Intern(obj)

            expect(intern.getCard()).toContain(intern.name)
            expect(intern.getCard()).toContain(intern.id)
            expect(intern.getCard()).toContain(intern.email)
            expect(intern.getCard()).toContain(intern.school)
            
        })

    })

})