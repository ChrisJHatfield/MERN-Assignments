import React, { useEffect } from 'react';

const Pokemon = ({setAllPokemon}) => {

    const onClickHandler = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(response => response.json())
        .then(response => setAllPokemon(response.results))
        .catch(err => { console.log(err); })
    }

    return(
        <>
            <button onClick={ onClickHandler }>Fetch Pokemon</button>
        </>
    )
}
export default Pokemon;