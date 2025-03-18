
function saludar( nombre ) {
    console.log( arguments );
    console.log( 'Hola ' + nombre );
    return [1,2];
    console.log( 'Después del return' );
}

const saludar2 = function ( nombre ) {
    console.log( 'Hola ' + nombre );
}

const saludarFlecha = () => {
    console.log( 'Hola Flecha' );
}

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola ' + nombre );
}

const retornoDeSaludar = saludar('Juan', 40, true, 'Costa Rica');
console.log( retornoDeSaludar );
// saludar2('Juan');
// saludarFlecha();
// saludarFlecha2('Juan');


function sumar( a, b ){
    return a + b;
}

const sumar2 = ( a, b ) =>  a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

// console.log( sumar( 1, 2 ) );
// console.log( sumar2( 1, 2 ) );
// console.log( getAleatorio() );
console.log( getAleatorio2() );