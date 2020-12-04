import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Doe" age={ 29 } hairColor="Blonde"/>
      <PersonCard firstName="John" lastName="Cena" age={ 1337 } hairColor="Brown"/>
      <PersonCard firstName="Father" lastName="Time" age={6400000000} hairColor="Silver"/>
      <PersonCard firstName="Sponge" lastName="Bob" age={14} hairColor="Yellow"/>
    </div>
  );
}
export default App;