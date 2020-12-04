import React, { useState } from 'react';
import './App.css';
import AxiosPokemon from './components/AxiosPokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="App">
      <AxiosPokemon setPokemon={ setPokemon } pokemon={pokemon} />
      {
        pokemon.map((value, idx) => <ul key={idx}><li>{value.name}</li></ul>)
      }
    </div>
  );
}

export default App;