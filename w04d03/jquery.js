const renderPokemon = (data) => {
  $('#pokemon-list').empty();

  for (const pokemon of data) {
    const pokemonHtml = `<li>${pokemon.name}</li>`;
    $('#pokemon-list').append(pokemonHtml);
  }
};

const handleGetPokemonBtnClick = () => {
  $.get('https://pokeapi.co/api/v2/pokemon')
    .then((data) => renderPokemon(data.results))
    .catch((err) => console.log(err));
};

$('#get-pokemon-btn').click(handleGetPokemonBtnClick);
