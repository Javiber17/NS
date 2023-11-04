import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response-interface";


export class Pokemons {
    //public readonly id: number;
    //public name: string;
    
    get imageUrl(): string {
        return `http://pokemon.com/${ this.id}.jpg`; 
    }
    constructor( 
        public readonly id: number,
        public name: string,
       //public imageUrl: string
    ) {}
    
    scream() {
    console.log(`${this.name.toUpperCase()}!!!`);}
    
    speak() {
        console.log(`${this.name},${this.name}`);}
    
    async getMoves() { 
        const {data} = await axios.get<PokeapiResponse>  ('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

export const charmander = new Pokemons(4, 'Charmander')
//,'https://pokemon.com/4.jpg'

//charmander.id = 10;
//charmander.name = 'Mew'
//console.log(charmander);
//charmander.scream()
//charmander.speak() 

console.log( charmander.getMoves() );


