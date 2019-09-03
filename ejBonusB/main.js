'use strict';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName () {
        const concatenation = this.firstName +' '+ this.lastName;
        return concatenation;
    }
}

const paquita = new Person ('Paquita', 'Ochoa');
console.log(paquita.fullName)  
const pepito = new Person ('Pepito', 'Pérez');
console.log(pepito.fullName)