import { genericFunction, printObject, genericArrowFunction } from '../generics/generics';
import { Hero, Villain } from '../interfaces';


// printObject( 123 );
// printObject( new Date() );
// printObject( { a: 1, b: 2, c: 3 } );
// printObject( [1,2,3,4,5,6,7,8,9] );
// printObject( 'Hola Mundo!' );

// console.log( genericArrowFunction( 3.141618 ).toFixed( 2 ) );
// console.log( genericArrowFunction( 'Hola Mundo!' ).toUpperCase() );
// console.log( genericArrowFunction( new Date() ).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericArrowFunction<Hero>( deadpool ).name );
console.log( genericArrowFunction<Hero>( deadpool ).realName );
console.log( genericArrowFunction<Villain>( deadpool ).dangerLevel );