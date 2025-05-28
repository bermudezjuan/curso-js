function printToConsole( constructor: Function ){
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
    if( print ){
        return printToConsole;
    } else {
        return () => {};
    }    
}

const bloquearPrototipo = ( constructor: Function ) => {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function CheckValidPokemonId(){
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        
        const originalMethod = descriptor.value;
        descriptor.value = ( id: number ) => {
            if ( id < 1 || id > 807 ){
                return console.error('El id del pokemon debe estar entre 1 y 807');
            } else {
                return originalMethod( id );
            }
        }
        //descriptor.value = () => console.log('Hola mundo');
    }        
}

function readOnly( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string ){
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this );                
                return 'Juan'; 
            },
            set(this, val) {
                // console.log(this, val);
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
            }
        }
        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    @readOnly()
    public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/'

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number ){
        console.log(`Pokemon guardado en la base de datos ${id}`)
    }
}