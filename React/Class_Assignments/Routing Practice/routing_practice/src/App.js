import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import DisplayHome from './components/DisplayHome';
import DisplayNumber from './components/DisplayNumberWord';
import DisplayColor from './components/DisplayColor';

function App() {
  return (
    <div className="App">
        <Router>
          <DisplayHome path="/home" />
          <DisplayNumber path="/:numberOrWord" />
          <DisplayColor path="/:word/:wordColor/:backColor" />
        </Router>
    </div>
  );
}

export default App;