(() => {

    type Avengers = {        
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    
    const avengers: Avengers ={
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bethany',
        activo: true,
        poder: 1500.123123,
    }

    // const { poder, vision } = avengers;

    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ( { vision, ...resto }: Avengers ) =>{
        console.log(vision, resto);
    }

    // printAvenger(avengers);

    const avengersArr: [string, boolean, boolean] = ['Cap. America', true, false];

    const [cap, ironman, unNumero ] = avengersArr;
    // console.log({ironman, cap});


})();