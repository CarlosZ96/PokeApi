import React from "react";
import { useState, useEffect } from 'react';

const Api = () => {

  let [pokemonNumber, setPokemonNumber] = useState(400);
  let [pokemonName, setPokemonName] = useState('');

  function increaseNumber() {
    setPokemonNumber(pokemonNumber + 1);
  }
  function decreaseNumber() {
    setPokemonNumber(pokemonNumber - 1);
  }

  useEffect(() => {
    SearchPokemon(pokemonNumber)
  });

 let SearchPokemon = async pokemonNumber =>{
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
   const data = await response.json();
   setPokemonName(data.name);
 }

  return (
    <div className="shit-container">
      <span>{pokemonName} - Pokedex#: {pokemonNumber}</span>
      <br />
      <button onClick={decreaseNumber}>Previus</button>
      <button onClick={increaseNumber}>Next</button>
    </div>
  );
}

export default Api;