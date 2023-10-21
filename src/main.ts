import {charmander } from'./bases/03-Classes'
      

//import { bulbasaur, pokemons } from './bases/02-objets';
import './style.css'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'
 


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

  <div>
    <h1>Hellow Vite!</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${charmander.id}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${charmander.name}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript!!!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
