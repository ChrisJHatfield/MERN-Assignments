import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/" />
        <Update path="people/:id/edit" />
        <Details path="people/:id" />
      </Router>
    </div>
  );
}

export default App;