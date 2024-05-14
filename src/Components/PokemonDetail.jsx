import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetail() {
  const {id} = useParams()

  const [pokemonDetails, setPokemonDetails] = useState()

  const getDetail = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const response = await axios.get(url);
      setPokemonDetails(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const { name, sprites, types, weight, height, abilities, species } = pokemonDetails;
  const officialArtworkUrl = sprites.other['official-artwork'].front_default;

  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/`;

  return (
    <>
     <div className="flex flex-col items-center">
      <div className="text-3xl font-bold mb-4">{name}</div>
      <img src={officialArtworkUrl} alt={`Official artwork of ${name}`} className=" mb-4" />
      <img src={`${urlImage}${id}.gif`} alt={`${name}`} className=" mb-4" />
      <div className="text-lg mb-2">ID: {id}</div>
      <div className="text-lg mb-2">Type: {types.map(type => type.type.name).join(", ")}</div>
      <div className="text-lg mb-2">Weight: {weight} kg</div>
      <div className="text-lg mb-2">Height: {height / 10} m</div>
      <div className="text-lg mb-2">Abilities: {abilities.map(ability => ability.ability.name).join(", ")}</div>
      <div className="text-lg mb-2">Description: {species.name}</div>
      {/* You can fetch evolution chain data from species.url */}
      {/* Display evolution information as needed */}
    </div>
    </>
  )
}

export default PokemonDetail