const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('Initialization', () => {
        const engineer = new Engineer(1, 'Cody', 'cody@gmail.com', 'Cody33')

        it('should intialize with expected arguments', () => {
            expect(engineer.id).toBe(1)
            expect(engineer.name).toBe('Cody')
            expect(engineer.email).toBe('cody@gmail.com')
        })
        it('getName method should return expected argument', () => {
            expect(engineer.getName()).toBe('Cody')
        })
        it('getId method should return expected argument', () => {
            expect(engineer.getId()).toBe(1)

        })
        it('getEmail method should return expected argument', () => {
            expect(engineer.getEmail()).toBe('cody@gmail.com')

        })
        it('getRole method should return expected argument', () => {
            expect(engineer.getRole()).toBe('Engineer')

        })
        it('getGithub method should return expected argument', () => {
            expect(engineer.getGithub()).toBe('Cody33')
        })
    })
})