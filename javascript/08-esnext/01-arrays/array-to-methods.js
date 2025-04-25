const heroes = [ 'Batman', 'Superman', 'Flash', 'Aquaman' ];
//heroes.sort();
// const superHeroesCopy = superHeroes;

const deletedHeroes = heroes.splice(0,2, 'Green Lantern')
//const deletedHeroes = heroes.toSpliced(0,2, 'Green Lantern')

//const sortedHeroes = heroes.toSorted();

//const reversedHeroes = heroes.toReversed();



console.table( heroes );
console.table( deletedHeroes );