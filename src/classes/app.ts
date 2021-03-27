import { Pokemon } from "./abstract.js";
import { Alcremie } from "./Alcremie.js";
import { Caterpie } from "./caterpie.js";
import { Cosmog } from "./cosmog.js";
import { Drapion } from "./drapion.js";
import { Joltik } from "./joltik.js";
import { Marill } from "./marill.js";
import { Morpeko } from "./morpeko.js";
import { Pikachu } from "./pikachu.js";
import { Roselia } from "./roselia.js";
import { Sandshrew } from "./sandshrew.js";
import { Squirtle } from "./squirtle.js";
import { Stonjourner } from "./stonjourner.js";

let pokemons: Pokemon[] = [
    new Pikachu(), 
    new Marill(),
    new Drapion(), 
    new Joltik(), 
    new Roselia(), 
    new Sandshrew(), 
    new Caterpie(),
    new Morpeko(),
    new Alcremie(),
    new Stonjourner(),
    new Cosmog(),
    new Squirtle()
];

pokemons.map(convertToDiv).forEach(displayDiv);

function convertToDiv(pokemon: Pokemon): HTMLElement {
    let div = document.createElement("div");

    let namePokemon = document.createElement("h2");
    namePokemon.innerHTML = pokemon.name;
    div.appendChild(namePokemon);
    let imgPokemon = document.createElement("img");
    imgPokemon.setAttribute("src", pokemon.getLinkToImage());
    div.appendChild(imgPokemon);
    let attackPokemon = document.createElement("h3");
    attackPokemon.innerHTML = pokemon.attack;
    div.appendChild(attackPokemon);
    let hpPokemon = document.createElement("h5");
    hpPokemon.innerHTML = "HP: " + pokemon.hp.toString();
    div.appendChild(hpPokemon);
    let typePokemon = document.createElement("h4");
    typePokemon.innerHTML = "Type: " + pokemon.type;
    div.appendChild(typePokemon);

  

    pokemon.showInfoAbout();
    return div;


}

function displayDiv(div: HTMLElement): void {
    document.querySelector(".container")?.appendChild(div);

}
