"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realName = '';
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Juan',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress() {
            return this.address.zip;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            zip: 'K25 U2A',
            city: 'Toronto'
        },
        getFullAddress(id) {
            return this.address.zip;
        }
    };
})();
(() => {
    const addTwoNumbers = (a, b) => {
        return a + b;
    };
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map