const namePokemon= document.getElementById("namepokemon");

const imgPokemon= document.getElementById("pokeimage");

const peticionApi = async() => {

    const peticionGet = fetch("https://pokeapi.co/api/v2/pokemon/charmander")

    const datosPoke = (await peticionGet).json();

    const imgCharmander= datosPoke.sprite.front_default;

    const nombreCharm= datosPoke.name;

    namePokemon.textContent= nombreCharm;
    imgPokemon.src =imgCharmander;
}

await peticionApi();

