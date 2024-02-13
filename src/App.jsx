import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import SearchPokemon from "./Components/SearchPokemon";
import Pokemon from "./Components/Pokemon";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    moves: "",
    speed: "",
    experience: "",
    height: "",
    weight: "",
  });

  const handleSearch = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        setPokemon({
          name: pokemonName,
          experience: res.data.base_experience,
          height: res.data.height,
          weight: res.data.weight,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
          moves: res.data.moves[0].move.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  const handlePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  return (
    <>
      <SearchPokemon
        pokemon={pokemonName}
        onSetPokemonName={handlePokemonName}
        onHandleSearch={handleSearch}
      />

      <Pokemon pokemon={pokemon} pokemonChosen={pokemonChosen} />
    </>
  );
}

export default App;
