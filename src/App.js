import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(50);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100');
      await loadingPokemon(res.data.results);
      setLoading(false);
    }

    getPokemons();
  }, [])

  const loadingPokemon = async data => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await axios.get(pokemon.url);
      return pokemonRecord.data;
    }))

    setPokemonData(_pokemonData);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Pokemons</h1>
    </div>
  );
}

export default App;
