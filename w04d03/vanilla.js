const getPokemonBtn = document.getElementById('get-pokemon-btn');
const pokemonList = document.getElementById('pokemon-list');

const renderPokemon = (data) => {
  pokemonList.innerHTML = '';

  for (const pokemon of data) {
    const pokemonHtml = `<li>${pokemon.name}</li>`;
    pokemonList.innerHTML += pokemonHtml;
  }
};

const handleGetPokemonBtnClick = () => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((data) => renderPokemon(data.results));
};

getPokemonBtn.addEventListener('click', handleGetPokemonBtnClick);
