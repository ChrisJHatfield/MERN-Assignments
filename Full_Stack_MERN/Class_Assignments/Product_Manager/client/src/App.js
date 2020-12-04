import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import ProductEdit from './views/ProductEdit';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductEdit path="/:id/edit" />
        <ProductDetails path="/:id" />
      </Router>
    </div>
  );
}

export default App;