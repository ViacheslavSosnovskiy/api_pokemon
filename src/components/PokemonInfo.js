import { useEffect, useState } from "react";
import { getPokemon } from "../services/api/getPokemon";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!pokemonName) {
        return
    }

    setStatus(Status.PENDING);
    getPokemon(pokemonName)
        .then((pokemon) => {
            setPokemon(pokemon);
            setStatus(Status.RESOLVED);
        })
        .catch(error => {
            setError(error)
            setStatus(Status.REJECTED)
        }) 
  }, [pokemonName]);

  // componentDidUpdate(prevProps, prevState) {
  //     const prevName = prevProps.pokemonName
  //     const nextName = this.props.pokemonName

  //     this.setState({ status: Status.PENDING })
  //     if (prevName !== nextName) {
  //         getPokemon(nextName)
  //             .then(pokemon => this.setState({pokemon, status: Status.RESOLVED}))
  //             .catch(error => this.setState({error, status: Status.REJECTED}))
  //     }
  // }

  if (status === Status.IDLE) {
    return <dev>Enter pokemon name</dev>
  }

  if (status === Status.PENDING) {
    // return <PokemonPendingView pokemonName={pokemonName} />
    return <div>{pokemonName}</div>
  }

  if (status === Status.RESOLVED) {
    // return <PokemonDataView pokemon={pokemonName} />
  }

  if (status === Status.REJECTED) {
    // return <PokemonErrorView message={error.message} />
  }
}
