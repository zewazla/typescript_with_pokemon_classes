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
let pokemons = [
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
function convertToDiv(pokemon) {
    let div = document.createElement("div");
    let namePokemon = document.createElement("h2");
    namePokemon.innerHTML = pokemon.name;
    let imgPokemon = document.createElement("img");
    imgPokemon.setAttribute("src", pokemon.getLinkToImage());
    let attackPokemon = document.createElement("h3");
    attackPokemon.innerHTML = pokemon.attack;
    let hpPokemon = document.createElement("h5");
    hpPokemon.innerHTML = "HP: " + pokemon.hp.toString();
    let typePokemon = document.createElement("h4");
    typePokemon.innerHTML = "Type: " + pokemon.type;
    div.appendChild(namePokemon);
    div.appendChild(imgPokemon);
    div.appendChild(attackPokemon);
    div.appendChild(hpPokemon);
    div.appendChild(typePokemon);
    pokemon.showInfoAbout();
    return div;
}
function displayDiv(div) {
    var _a;
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.appendChild(div);
}
