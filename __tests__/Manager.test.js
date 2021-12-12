const Manager = require('../lib/Manager')

describe('Manager', () => {
    const manager = new Manager(1, 'Cody', 'cody@gmail.com', '2813308004')
    describe('Initialization', () => {

        it('should intialize with expected arguments', () => {
            expect(manager.id).toBe(1)
            expect(manager.name).toBe('Cody')
            expect(manager.email).toBe('cody@gmail.com')
            expect(manager.officeNumber).toBe('2813308004')
        })
    })
    describe('Methods', () => {
        it('getName method should return expected argument', () => {
            expect(manager.getName()).toBe('Cody')
        })
        it('getId method should return expected argument', () => {
            expect(manager.getId()).toBe(1)

        })
        it('getEmail method should return expected argument', () => {
            expect(manager.getEmail()).toBe('cody@gmail.com')

        })
        it('getRole method should return expected argument', () => {
            expect(manager.getRole()).toBe('Manager')

        })
    })
})