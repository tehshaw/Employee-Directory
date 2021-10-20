const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager");

describe("Manager class", ()=>{

    const obj = {name: "Dave", id: "44", email: "test@test.com", officeNum: "5525"};
    const manager = new Manager(obj)

    describe("Initialization", () => {

        it("should extend Employee", () => {
            expect(manager).toBeInstanceOf(Employee);
        })

    })

    it("name can be returned after constuction from parent class Employee", () => {
        expect(manager.getName()).toBe("Dave");
    })

    it("id can be returned after constuction from parent class Employee", () => {
        expect(manager.getID()).toBe("44")
    })

    it("email can be returned after constuction from parent class Employee", () => {
        expect(manager.getEmail()).toBe("test@test.com")
    })

    it("office number can be returned after constuction", () => {
        expect(manager.getOffice()).toBe("5525")
    })

    describe("getRole", () => {
        it("should return 'Manager' to match class name", () => {
            expect(manager.getRole()).toBe("Manager")
        });
    })

    describe("addTeamMember", () => {
        it("should add a new employee (Engineer/Intern) to myTeam array", () => {
            const employee1 = new Intern();
            const employee2 = new Engineer();
            manager.addTeamMember(employee1);
            manager.addTeamMember(employee2);

            expect(manager.getTeam()[0]).toBeInstanceOf(Intern);
            expect(manager.getTeam()[1]).toBeInstanceOf(Engineer);
        })
    })

    describe("getCard", () => {

        it("getCard will return template literal to build HTML including passed param", () => {
            expect(manager.getCard()).toContain(manager.name)
            expect(manager.getCard()).toContain(manager.id)
            expect(manager.getCard()).toContain(manager.email)
            expect(manager.getCard()).toContain(manager.officeNum)
            
        })

    })

})