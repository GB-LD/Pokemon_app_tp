import {getPkmn} from './pkmnDetails.js'

export function getPkmnList() {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
  .then(res => res.json())
  .then(data => {
    for(let i=0 ; i<data.results.length ; i++){
      getPkmn(data.results[i].name);
    }
  })
}


