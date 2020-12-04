import React from 'react';
import axios from 'axios';

const AxiosPokemon = ({pokemon, setPokemon}) => {

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(response =>{ setPokemon(response.data.results); })
    };

    return(
        <>
            <button onClick={ getPokemon }>Fetch Pokemon</button>
        </>
    );
}
export default AxiosPokemon;