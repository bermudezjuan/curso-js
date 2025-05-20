(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName?: string,
        ){
            //console.log('Constructor Avenger llamado');
        }

        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            //console.log('Constructor Xmen llamado');
        } 

        get fullName(): string {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }
        
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine.fullName);
    // wolverine.fullName = 'Ja';
    // console.log(wolverine.fullName);
    // wolverine.getFullNameDesdeXmen();

})()