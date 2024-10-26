// Get Elemnts
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const imgDiv = document.getElementById('img-div');
const types = document.getElementById('types');

const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

// All valid Pokémon API
const apiUrl = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

// Get pokemon data
const getPokemons = (data) => {
  // console.log(data);
  const {id, name, height, weight, sprites} = data;
  const types = data.types;
  
  const stats = data.stats;
  const hp = stats[0].base_stat;
  const attack = stats[1].base_stat;
  const defense = stats[2].base_stat;
  const spAttac = stats[3].base_stat;
  const spDefense = stats[4].base_stat;
  const speed = stats[5].base_stat;
  
  const imgUrl = sprites.front_default;

  const pokemonData = {
    id,
    name,
    height,
    weight,
    imgUrl,
    types,
    hp,
    attack,
    defense,
    spAttac,
    spDefense,
    speed
  };
  return　pokemonData;
};

searchButton.addEventListener('click', () => {
  let eachPokemonUrl = '';
  let pokemonData = {};

  let typeParagraph = types.querySelectorAll('.type');
  let pokemonImg = document.getElementById('sprite');

  // Remove img
  if (pokemonImg) {
  pokemonImg.remove();
}

  // Remove past search's type
  typeParagraph.forEach(element => {
    types.removeChild(element);
  });

  const inputValue = searchInput.value.toLowerCase();

  if (inputValue === "") {
    alert('Please enter  Pokémon Name or ID');
    return;
  } else if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
    alert('Only numbers and numbers can be entered. ');
    return;
  } else {
    // Each pokemon info URL
    eachPokemonUrl = `${apiUrl}/${inputValue}`;
    // console.log(eachPokemonUrl);
  }

  // Make a GET request
  fetch(eachPokemonUrl)
    .then(res => res.json())
    .then(data => {
      pokemonData = getPokemons(data);
  
  // Show window
  pokemonId.innerText = `#${pokemonData.id}`;
  pokemonName.innerText = pokemonData.name.toUpperCase();
  height.innerText = `Height: ${pokemonData.height}`;
  weight.innerText = `Weight: ${pokemonData.weight}`;

  hp.innerText =pokemonData.hp;
  attack.innerText = pokemonData.attack;
  defense.innerText = pokemonData.defense;
  specialAttack.innerText = pokemonData.spAttac;
  specialDefense.innerText = pokemonData.spDefense;
  speed.innerText = pokemonData.speed;

  // Create sprite
  let newImg = document.createElement('img');
    newImg.id = "sprite";
    newImg.src= pokemonData.imgUrl;
    newImg.alt = "front_default";
    newImg.width = "150";
    imgDiv.appendChild(newImg);

  for (let i = 0; i < pokemonData.types.length; i = i + 1) {
    let type = pokemonData.types[i].type.name;
    
    // Create type paragraph
    let newParagraph = document.createElement('p');
    newParagraph.textContent = type.toUpperCase();
    newParagraph.id = type;
    newParagraph.classList.add('type');

    types.appendChild(newParagraph);
}

  }).catch ((err) => {
    searchInput.value = '';
    alert('Pokémon not found');
    console.log(`ERROR: ${err}`);
  })

});
