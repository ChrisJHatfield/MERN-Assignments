import React, { useState } from 'react';
import './App.css';
import Pokemon from './components/PokemonAPI';

function App() {

  const [allPokemon, setAllPokemon] = useState([]);

  return (
    <div className="App">
      <Pokemon setAllPokemon={setAllPokemon}/>
      {
        
          allPokemon.map((value, index) =><ul><li key={index}>{value.name}</li></ul>)
        
      }
    </div>
  );
}

export default App;