namespace Validations {

    export const validateText = ( text: string ) => {
    
        return text.length > 3;       
    }
    
    export const validateDate = ( myDate: Date  ) => {
        return ( isNaN( myDate.valueOf()  ) ) ? false : true
    
    
    }
}

console.log( Validations.validateText( 'Juan' ) );
console.log( Validations.validateDate( new Date() ) );