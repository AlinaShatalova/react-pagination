import React from 'react'

const Buttons = ({ nextPage, prevPage }) => {
    return (
        <div className="mb-5">
            <button className="btn btn-primary" onClick={prevPage} >Prev page</button>
            <button className="btn btn-primary ms-2" onClick={nextPage} >Next page</button>
        </div>
    )
};
export default Buttons;