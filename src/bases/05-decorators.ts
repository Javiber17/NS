import { Pokemon } from './04-injections';
import { name } from './01-types';


export class Pokemon {
    constructor(
        public readonly id: number;
        public name: string;
    ) {}
}

scream() {
    console.log(`${this.name.toUpperCase()}!!`)
}
speak() {
    console.log(`${this.name}, ${this.name}!`);
}