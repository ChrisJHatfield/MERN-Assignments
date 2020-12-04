import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Chris" lastName="Hetfield" age={35} hairColor="Brunette" />
      <PersonCard firstName="James" lastName="Hatfield" age={41} hairColor="Brown" />
      <PersonCard firstName="William" lastName="Hatfield" age={195} hairColor="Red" />
      <PersonCard firstName="Joseph" lastName="Hatfield" age={270} hairColor="Gray" />
    </div>
  );
}

export default App;
