import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function PokemonList() {
  const [pokemonData, setpokemonData] = useState([]);

  const getData = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/`;
      const response = await axios.get(url);
      const pokemoninfo = response.data.results.map((pokemon, index) => {
        return {
          id: index + 1,
          name: pokemon.name,
        };
      });
      setpokemonData(pokemoninfo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-2 p-4">
        {pokemonData.map((pokemon) => (
          <Card key={pokemon.id} props={pokemon} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
