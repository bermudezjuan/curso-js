(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        name: string;
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number = 0;       
        public name: string = '';
        public realName: string = '';

        mutantPower(id: number): string {
            return this.name + ' ' + this.realName;
        }
    }

})();