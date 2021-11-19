import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Pokemons from './components/Pokemons'
import Pagination from './components/Pagination'
import Buttons from './components/Buttons'
import SearchFiled from './components/SearchField'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [userPokemon, setUserPokemon] = useState('');
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(50);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=400');
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage((curr) => {
    if(curr === pokemonData.length / pokemonsPerPage) {
      return 1;
    } else {
      return curr + 1;
    }
  });
  const prevPage = () => setCurrentPage((curr) => {
    if (curr === 1) {
      return pokemonData.length / pokemonsPerPage;
    } else {
      return curr - 1;
    }
  });

  const handleChangePokemon = (e) => {
    setUserPokemon(e.target.value);
  }

  return (
    <div className="container mt-5 shadow p-5 mb-5 bg-white rounded">
      <h1 className="text-primary fs-1">Pokemons</h1>
      <SearchFiled changeText={handleChangePokemon} value={userPokemon} />
      <Pokemons
        pokemonData={pokemonData}
        userPokemon={userPokemon}
        loading={loading} 
        currentPage={currentPage}
        pokemonsPerPage={pokemonsPerPage}
        />
      <Pagination pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemonData.length} paginate={paginate} />
      <Buttons nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default App;
