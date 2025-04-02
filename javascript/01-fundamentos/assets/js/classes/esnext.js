class Rectangulo {
    #area = 0;
    constructor( base, altura ){
        this.base = base;
        this.altura = altura;
        this.#area = this.base * this.altura;
    }   
    calcularArea(){
        console.log(this.#area * 2);        
    }
}

const rectangulo = new Rectangulo( 10, 15);
rectangulo.calcularArea();
console.log(rectangulo);