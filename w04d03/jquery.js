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

const handleSubmitTodoNotesForm = (event) => {
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
    url: 'https://httpbin.org/post',
    dataType: 'JSON',
    data: newUser,
  }).then((data) => console.log(data));
};

$('#user-form').submit(handleSubmitTodoNotesForm);
