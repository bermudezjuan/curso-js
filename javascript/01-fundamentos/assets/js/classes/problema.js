const fher = {
    nombre : 'Fernando',
    edad : 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`)
    }
}

const pedro = {
    nombre : 'Pedro',
    edad : 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`)
    }
}

// fher.imprimir()
// Esto se debe crear con la palabra new
function Persona( nombre, edad ) {
    console.log('Se ejecutó esta linea')  
    this.nombre = nombre;
    this.edad   = edad;   
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }   
}

const maria = new Persona( 'Maria', 25  );
const melissa = new Persona( 'Melissa', 35  );
maria.imprimir();