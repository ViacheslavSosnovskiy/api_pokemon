const BASE_URL = "https://pokeapi.co/api/v2/"

export const getPokemon = (pokemonName) => {
    return fetch(`${BASE_URL}/pokemon/${pokemonName}`).then(res => res.json())
}