// function crearPersona( nombre, apellido){
//     return { 
//         nombre: nombre,
//         apellido : apellido,
//     }
// }

const crearPersona = ( nombre, apellido) => ({ nombre, apellido});

const persona = crearPersona( 'Juan', 'Bermúdez' );
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args} );
    return args;
}

const argumentos = imprimeArgumentos2(10, true, false, 'Juan', 'Hola');
console.log( argumentos );