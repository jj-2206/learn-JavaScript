// apiurl = https://pokeapi.co/

const poke_container = document.getElementById('poke_container');
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poision: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#DEF9FD',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const pokemons_number = 30;

const main_types = Object.keys(colors);
// console.log(main_types);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const image = pokemon.sprites.other.dream_world.front_default;
  const poke_types = pokemon.types.map((item) => item.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokeInnerHTML = `
  <div class="img-container">
  <img src="${image}"></div>
  <div class="info">
  <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
  <h3 class="name">${name}</h3>
  <small class="type">Type: <span>${poke_types}</span></small>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);
}
