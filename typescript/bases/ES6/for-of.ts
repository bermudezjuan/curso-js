(() => {
    type Avenger ={
        name: string,
        weapon: string,    
    } 

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Steve Rogers',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor Odinson',
        weapon: 'Mjolnir',
    }
    
    const avengers: Avenger[] = [ironman, thor, captainAmerica];

    for (const avenger of avengers)  {
        console.log(avenger.name, avenger.weapon);
    }
})();