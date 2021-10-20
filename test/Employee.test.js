const Employee = require("../lib/Employee");


describe("Employee class", ()=>{

    it("Employee name can be returned after constuction", () => {
        expect(new Employee("Dave", "id", "email").getName()).toBe("Dave")
    })

    it("Employee id can be returned after constuction", () => {
        expect(new Employee("Dave", "42", "email").getID()).toBe("42")
    })

    it("Employee email can be returned after constuction", () => {
        expect(new Employee("Dave", "42" , "test@gmail.com").getEmail()).toBe("test@gmail.com")
    })

    describe("getRole", () => {
        it("getRole will return 'Employee' to match class name", () => {
            expect(new Employee("name", "id", "email").getRole()).toBe("Employee")
        });
    })

})