let personaje = {
    nombre: 'Tony Stark',
    codeName : 'Ironman',
    edad: 40,
    vivo: false,
    coords: {
        lat : 34.034,
        lng : -118.78
    },
    trajes: [ 'Mark 1', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula' : 'Infinity War',
};

console.log( personaje );
console.log( 'Nombre', personaje.nombre );
console.log( 'Edad', personaje.edad );
console.log( 'Coors', personaje.coords );
console.log( 'Lat', personaje.coords.lat );
console.log( 'Numero de trajes', personaje.trajes.length );
console.log( 'Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1] );
const x = 'vivo';
console.log( 'Vivo: ', personaje[x] );
console.log( 'Ultima Pelicula: ', personaje['ultima-pelicula'] );

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje );

personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( propiedades );
console.log( valores );
