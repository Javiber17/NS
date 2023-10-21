

export class Pokemons {
    //public readonly id: number;
    //public name: string;

    constructor( 
        public readonly id: number,
        public name: string,
        public imageUrl: string,
    ) {}
}

export const charmander = new Pokemons(4, 'Charmander','https://pokemon.com/4')

// charmander.id = 10;
//charmander.name = 'new'
console.log(charmander);