const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const PAGE_SIZE = 20;

const pokemonContainer = document.getElementById('pokemon-container');

fetchAndAppendPokemon();

async function fetchAndAppendPokemon() {
  const url = createPokemonUrl();
  const response = await fetch(url)
  const pokemon = await response.json()
  const pokemons = pokemon.results;
  const fragment = document.createDocumentFragment();

  pokemons.forEach(pokemon => {
    console.log(pokemon.name)
    fragment.appendChild(createPokemonElement(pokemon.name))
  })
  pokemonContainer.appendChild(fragment)
}

function createPokemonElement(results) {
  const pokemonElement = document.createElement('p');
  pokemonElement.classList.add('pokemon');
  pokemonElement.textContent = results;
  return pokemonElement;
}

function createPokemonUrl() {
  const url = new URL(API_BASE_URL);
  url.searchParams.set('limit', PAGE_SIZE);

  return url;
}