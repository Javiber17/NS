

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
    }
    

export const charmander = new Pokemons(4, 'Charmander')
//,'https://pokemon.com/4.jpg'

//charmander.id = 10;
//charmander.name = 'Mew'
console.log(charmander);
charmander.scream()
charmander.speak() 


