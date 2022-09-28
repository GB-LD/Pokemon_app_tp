// fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")

// .then(res => res.json())
// .then(data => {

//     const pkmnData = data.results;
    
//     pkmnData.forEach(element => {
//         const pkmnName = element.name;
//         fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnName}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             const pkmnName = data.name;
//             const pkmnImg = data.sprites.front_default;

//             let cardElement = 
//             `<div class="column is-one-quarter">
//                 <div class="card">
//                     <div class="card-content">
//                         <div class="media">
//                             <div class="media-left">
//                                 <figure class="image is-48x48">
//                                 <img src="${pkmnImg}" alt="Placeholder image">
//                                 </figure>
//                             </div>
//                             <div class="media-content">
//                                 <p class="title is-4">${pkmnName}</p>
//                             </div>
//                             <button class="button is-primary is-light">About</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;
        
//             document.getElementById('pkmnTab').insertAdjacentHTML('beforeend', cardElement);
//         });
//     });
// })

// import {pkmnList} from './getPkmnData.js';
// console.log(pkmnList);

import {getPkmnList} from './getPkmnData.js';
getPkmnList()



