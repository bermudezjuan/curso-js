/**
    2C = Two of Clubs
    2D = Two of Diamonds
    2H = Two of Hearts
    2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosComputadora = 0;
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');


// Esta función crea un deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }        
    }
    
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }        
    
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {

    if(deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();    
    return carta;
}

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);   
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1;
}

// turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    do {
        const carta = pedirCarta(); 
        puntosComputadora = puntosComputadora + valorCarta(carta);
        console.log(puntosComputadora);
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = document.createElement( 'img' );
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );
        if(puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
        
        } else if (puntosJugador === 21) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            
        }

        if( puntosMinimos > 21 ) {
            break;
        }
    } while ( (puntosComputadora < puntosJugador) && ( puntosMinimos <= 21 ) )
}

let valor = valorCarta(pedirCarta());
// console.log({ valor });

//Eventos
btnPedir.addEventListener('click', () => {    
    const carta = pedirCarta(); 
    puntosJugador = puntosJugador + valorCarta(carta);
    console.log(puntosJugador);
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );
    if(puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
       
    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {

});