class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log( this.nombre );
        console.log( 'Hola a todos soy un método estático' );
        
    }
    
    nombre ='';
    codigo ='';
    frase ='';  
    comida = '';  

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    /**
     * @param {string} comida
     */
    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es: ${this.comida}`;
    }
    

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);        
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
    
}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino super heroe' );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman');

spiderman.miFrase();
spiderman.setComidaFavorita = 'Pizza';
//spiderman.comida = 'Venom';

//console.log( spiderman.getComidaFavorita );
//console.log( spiderman );

// Persona._conteo = 2;
console.log( 'Conteo estático', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log( Persona );



