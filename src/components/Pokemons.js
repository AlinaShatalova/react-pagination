import React from 'react'

const Pokemons = ({ pokemonData, loading }) => {
    if(loading) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        // Отображение в виде списка
        // <ul className="list-group mb-2">
        //     {pokemonData.map((pokemon, i) => (
        //         <li className="list-group-item" key={i}>
        //             <img src={pokemon.sprites.front_default} alt={pokemon.name}  className="ml-2" style={{width: 75}}/>
        //             {pokemon.name}
        //         </li>
        //     ))}
        // </ul>

        <table className="table table-bordered table-striped w-50">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" width="7%">Icon</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                {pokemonData.map((pokemon, i) => (
                    <tr key={i}>
                        <td className="text-center">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}  className="ml-2" style={{width: 75}} />
                        </td>
                        <td className="align-middle">
                            {pokemon.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
export default Pokemons;