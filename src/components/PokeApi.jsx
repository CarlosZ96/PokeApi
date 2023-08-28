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
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
      .then(result => result.json())
      .then(data => setPokemonName(data.name))
  });

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