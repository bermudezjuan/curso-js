const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}
console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log( !regresaFalse() );

console.warn('And');
console.log(true && true);
console.log(true && !false);

console.log('===========');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.log('=====&&=====');
regresaFalse() && regresaTrue();

console.warn('Or');

console.log(true || false);
console.log(false || false);

console.log( regresaTrue() || regresaFalse() );

console.warn( 'Asignaciones' );

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && ' Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;


console.log( { a1, a2, a3, a4, a5 } );


if(true || true || true || false){
    console.log( 'Hacer algo.' );
}else{
    console.log( 'Hacer otra cosa' );
}