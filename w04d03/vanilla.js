const getPokemonBtn = document.getElementById('get-pokemon-btn');
const pokemonList = document.getElementById('pokemon-list');
const userForm = document.getElementById('user-form');
const response = document.getElementById('response');

const renderPokemon = (data) => {
  pokemonList.innerHTML = '';

  for (const pokemon of data) {
    const pokemonHtml = `<li>${pokemon.name}</li>`;
    pokemonList.innerHTML += pokemonHtml;
  }
};

// AJAX GET REQUEST EXAMPLE
const handleGetPokemonBtnClick = () => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((data) => renderPokemon(data.results));
};

getPokemonBtn.addEventListener('click', handleGetPokemonBtnClick);

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

  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      const json = JSON.stringify(data.json, null, '\t');
      response.innerHTML = json;
    });
};

userForm.addEventListener('submit', handleSubmit);
