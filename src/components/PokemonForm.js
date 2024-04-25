import { useState } from "react";

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState();

  const handleChange = ({ target: { value } }) => {
    setPokemonName(value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemonName.trim() === "") {
      return;
    }

    onSubmit(pokemonName);
    setPokemonName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={pokemonName} onChange={handleChange} />
      <button type="submit">search</button>
    </form>
  );
}
