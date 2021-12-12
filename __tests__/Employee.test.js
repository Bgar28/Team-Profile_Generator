const Employee = require('../lib/Employee')

describe('Employee', () => {
    const employee = new Employee(1, 'Cody', 'cody@gmail.com')
    describe('Initialization', () => {

        it('should intialize with expected arguments', () => {
            expect(employee.id).toBe(1)
            expect(employee.name).toBe('Cody')
            expect(employee.email).toBe('cody@gmail.com')
        })
    })
    describe('Methods', () => {
        it('getName method should return expected argument', () => {
            expect(employee.getName()).toBe('Cody')
        })
        it('getId method should return expected argument', () => {
            expect(employee.getId()).toBe(1)

        })
        it('getEmail method should return expected argument', () => {
            expect(employee.getEmail()).toBe('cody@gmail.com')

        })
        it('getRole method should return expected argument', () => {
            expect(employee.getRole()).toBe('Employee')

        })

    })
})