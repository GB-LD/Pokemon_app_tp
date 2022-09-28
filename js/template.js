export function generateCardTemplate(pkmn) {
    const temp = document.getElementById('pkmnCardTemplate');
    const newCard = document.importNode(temp.content, true);

    const cardImg = newCard.getElementById("imgCard");
    cardImg.src =  pkmn.sprites.front_default;
    const cardName = newCard.getElementById("cardName");
    cardName.innerHTML = pkmn.name;

    const pokedex = document.getElementById("pokedexContainer");
    pokedex.appendChild(newCard);
}