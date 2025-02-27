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
console.log( regresaTrue() &&regresaFalse() );

console.log('=====&&=====');
regresaFalse() && regresaTrue();

console.warn('Or');

console.log(true || false);
console.log(false || false);

console.log( regresaTrue() || regresaFalse() );


