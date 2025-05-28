import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype.customName as any) = 'Pikachu';

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
// charmander.publicApi = 'https://hola-mundo.com';
console.log(charmander);