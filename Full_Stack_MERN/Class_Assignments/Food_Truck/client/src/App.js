import React from 'react';
import './App.css';
import { Link, Router } from '@reach/router';
import NewFoodTruck from './components/NewFoodTruck';

function App() {



  return (
    <div className="container">
      <h1 className="text-center">Food Trucks</h1>
      <div className="row">
          <Link to="/" className="btn btn-primary col-sm-3"><button className="btn btn-primary">Dashboard</button></Link>
          <Link to="/truck/new" className="btn btn-primary col-sm-3"><button className="btn btn-primary">New Truck</button></Link>
      </div>
      <div>
        <Router>
          <NewFoodTruck  path="/truck/new" />
        </Router>
      </div>
    </div>
  );
}

export default App;
