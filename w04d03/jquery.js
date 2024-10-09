const renderPokemon = (data) => {
  $('#pokemon-list').empty();

  for (const pokemon of data) {
    const pokemonHtml = `<li>${pokemon.name}</li>`;
    $('#pokemon-list').append(pokemonHtml);
  }
};

// AJAX GET REQUEST EXAMPLE
const handleGetPokemonBtnClick = () => {
  $.get('https://pokeapi.co/api/v2/pokemon')
    .then((data) => renderPokemon(data.results))
    .catch((err) => console.log(err));
};

$('#get-pokemon-btn').click(handleGetPokemonBtnClick);

// AJAX POST REQUEST EXAMPLE
const handleSubmit = (event) => {
  event.preventDefault();
  const { firstName, lastName, email, password } = event.target.elements;

  const newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  $.ajax({
    method: 'POST',
    url: 'https://httpbin.org/post', // POST endpoint used as an example
    dataType: 'JSON',
    data: newUser,
  }).then((data) => {
    const json = JSON.stringify(data.form, null, '\t');
    $('#response').text(json);
  });
};

$('#user-form').submit(handleSubmit);
