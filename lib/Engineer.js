const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

