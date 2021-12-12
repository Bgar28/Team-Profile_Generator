const Intern = require('../lib/Intern')

describe('Intern', () => {
    const intern = new Intern(1, 'Cody', 'cody@gmail.com', 'School Of Hardknocks')
    describe('Initialization', () => {

        it('should intialize with expected arguments', () => {
            expect(intern.id).toBe(1)
            expect(intern.name).toBe('Cody')
            expect(intern.email).toBe('cody@gmail.com')
            expect(intern.school).toBe('School Of Hardknocks')
        })
    })
    describe('Methods', () => {
        it('getName method should return expected argument', () => {
            expect(intern.getName()).toBe('Cody')
        })
        it('getId method should return expected argument', () => {
            expect(intern.getId()).toBe(1)

        })
        it('getEmail method should return expected argument', () => {
            expect(intern.getEmail()).toBe('cody@gmail.com')

        })
        it('getRole method should return expected argument', () => {
            expect(intern.getRole()).toBe('Intern')

        })
        it('getSchool method should return expected argument', () => {
            expect(intern.getSchool()).toBe('School Of Hardknocks')
        })
    })
})