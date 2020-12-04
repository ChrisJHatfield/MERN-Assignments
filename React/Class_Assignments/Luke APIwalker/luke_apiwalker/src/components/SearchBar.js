import React, { useState } from 'react';
import { navigate } from '@reach/router';
import './SearchBar.css';

const SearchBar = () => {

    const [selection, setSelection] = useState('people');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${selection}/${document.getElementById("navId").value}`)
    };

    return(
        <div className="searchBar">
            <form onSubmit={submitHandler}>
                <label>Search for:</label>
                <select onChange={ e => setSelection(e.target.value)}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                    <option value='starships'>Starships</option>
                </select>
                <label>ID:</label>
                <input id="navId" type="text"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;