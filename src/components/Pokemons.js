import React, { useState } from 'react'

const Pokemons = ({ pokemonData, userPokemon, loading, currentPage, pokemonsPerPage }) => {
    const [sortDirection, setSortDirection] = useState(null);

    if(loading) {
        return (
            <h2 className="alert alert-secondary mt-4 mb-4" style={{ maxWidth: "50%"}}>Loading...</h2>
        )
    }

    // Копируем массив покемонов в новую переменную с учетом пользовательского ввода
    let sortedPokemons = [];

    if (userPokemon) {
        sortedPokemons = pokemonData.filter((pokemon) => pokemon.name.startsWith(userPokemon));
    } else {
        sortedPokemons = [...pokemonData];
    }
    
    // функция сортировки
    if (sortDirection !== null) {
        sortedPokemons.sort((a, b) => {
            if (a.name < b.name) {
                return sortDirection === 'ascending' ?  -1 : 1;
            }
            if (a.name > b.name) {
                return sortDirection === 'ascending' ?  1 : -1;
            }
            return 0;
        }
    )};

    // по клику
    const requestDirection = () => {
        const direction = sortDirection === 'ascending' ? 'descending' : 'ascending';
        setSortDirection(direction);
    }


    // Получение покемонов для данной страницы
    const lastPokemonIndex = currentPage * pokemonsPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
    const currentPokemon = sortedPokemons.slice(firstPokemonIndex, lastPokemonIndex);

    return (
        <>
            {currentPokemon.length > 0 ?
                <>
                    <p className="mt-4 fs-6">
                        To sort the table data in ascending order, click on the field "Name".
                        To sort the table data in descending order, click on the field again
                    </p>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" width="7%">Icon</th>
                                <th scope="col" onClick={() => requestDirection()} style={{cursor: 'pointer'}}>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPokemon.map((pokemon, i) => (
                                <tr key={i}>
                                    <td className="text-center">
                                        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="ml-2" style={{width: 75}} />
                                    </td>
                                    <td className="align-middle">
                                        {pokemon.name}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table> 
                </> :
                <div className="alert alert-primary mt-4 mb-4" role="alert" style={{ maxWidth: "50%"}}>
                    There are no pokemons with this name
                </div>
            }
        </>  
    )
};
export default Pokemons;