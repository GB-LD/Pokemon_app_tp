import {generateCardTemplate} from "./template.js";

export function getPkmn(pkmn) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
    .then(res => res.json())
    .then(data => {
        //displayPkmData(data);
        generateCardTemplate(data);
    })
  }

//   function displayPkmData(pkmnData) {
//     console.log(pkmnData);
//   }