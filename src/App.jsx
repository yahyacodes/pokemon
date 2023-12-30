import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        setData(data.results);
      } catch (err) {
        console.error("Error Fetching Pokemmon:", err);
      }
    };
    fetchPokemon();
  }, []);
  return (
    <>
      <div>
        <ul>
          {data.map((pokemon) => (
            <li className="text-white" key={pokemon.name}>
              <p>{pokemon.name}</p>
              <p>{pokemon.base_experience}</p>
              <p>{pokemon.height}</p>
              <p>{pokemon.order}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
