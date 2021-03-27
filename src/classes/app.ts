import { Pokemon } from "./abstract.js";
import { Drapion } from "./drapion.js";
import { Joltik } from "./joltik.js";
import { Roselia } from "./roselia.js";
import { Sandshrew } from "./sandshrew.js";

let pokemons: Pokemon[] = [new Drapion(), new Joltik(), new Roselia(), new Sandshrew()];

pokemons.forEach(f);

function f(a: Pokemon) {
    a.showInfoAbout();
}