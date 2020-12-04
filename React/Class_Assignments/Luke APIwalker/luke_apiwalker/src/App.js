import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Planets from './components/Planets';
import SearchBar from './components/SearchBar';
import ErrorFound from './components/Error';
import Starships from './components/Starships';

function App() {

  const [swPeople, setSWPeople] = useState([]);
  const [swPlanet, setSWPlanet] = useState([]);
  const [swStarships, setSWStarships] = useState([]);

  return (
    <div className="App">
      <SearchBar/>
      <Router>
        <People swPeople={swPeople} setSWPeople={setSWPeople} swPlanet={swPlanet} setSWPlanet={setSWPlanet} path="/people/:id" />
        <Planets swPlanet={swPlanet} setSWPlanet={setSWPlanet} path="/planets/:id" />
        <Starships swStarships={swStarships} setSWStarships={setSWStarships} path="/starships/:id" />
        <ErrorFound path="/error" />
      </Router>
    </div>
  );
}

export default App;
