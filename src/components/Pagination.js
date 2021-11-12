import React from 'react'

const Pagination = ({ pokemonsPerPage, totalPokemons, paginate }) => {
    const pagesNumbers = [];

    for (let i = 1; i <= Math.ceil((totalPokemons / pokemonsPerPage)); i += 1) {
        pagesNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {pagesNumbers.map(number => (
                <li className="page-item" key={number}>
                    <a className="page-link" href="!#" onClick={() => paginate(number)} >{number}</a>
                </li>
            ))}
        </ul>
    )
};
export default Pagination;