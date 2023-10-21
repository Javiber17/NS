
export const pokemonIds = [1,20,30,34,66];

interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const bulbasaur: Pokemon = {
    id : 1,
    name : 'bulbasaur',
    age: 2
}

export const charmander: Pokemon = {
    id: 1,
    name: 'charmander',
    age:4
}

export const pokemons: Pokemon [] = [];

pokemons.push(charmander, bulbasaur);
console.log(pokemons)

