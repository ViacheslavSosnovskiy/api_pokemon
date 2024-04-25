import { useState } from "react"
import PokemonForm from "./components/PokemonForm"
import PokemonInfo from "./components/PokemonInfo"

const App = () => {
  const [pokemonName, setPokemonName] = useState("")

  return (
    <>
      <PokemonForm onSubmit={setPokemonName}/>
      <PokemonInfo pokemonName={pokemonName}/>
    </>
  )
}

export default App