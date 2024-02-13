import React from "react";

const Pokemon = ({ pokemon, pokemonChosen }) => {
  return (
    <div className="rounded-md outline-none bg-divBg mt-2 p-5 ">
      {!pokemonChosen ? (
        <></>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="mb-5 text-2xl font-bold text-gray-100">
                {pokemon.name}
              </h1>
            </div>

            <div>
              <img src={pokemon.image} alt="" className="w-40 h-40" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Species: {pokemon.species}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Type: {pokemon.type}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Hp: {pokemon.hp}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Attack: {pokemon.attack}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Defense: {pokemon.defense}
              </h3>
            </div>

            <div>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Speed: {pokemon.speed}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Moves: {pokemon.moves}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Experience: {pokemon.experience}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Height: {pokemon.height}
              </h3>
              <h3 className="bg-gray-100 text-gray-900 rounded-md p-2 mb-1 hover:bg-gray-200 cursor-pointer font-mono font-semibold">
                Weight: {pokemon.weight}
              </h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
