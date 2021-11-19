import React from 'react'

const SearchFiled = (props) => {

    const {value, changeText} = props;

    return (
        <>
            <label htmlFor="ex2" className="mt-2 fs-5">Search your pokemon:</label>    
            <input 
                type="text"
                value={value}
                onChange={changeText}
                placeholder="Pokemon's name"
                id="ex2"
                className="form-control col-xs-3 mt-1"
                style={{ maxWidth: "50%"}}
            />
        </>
    )
};
export default SearchFiled;