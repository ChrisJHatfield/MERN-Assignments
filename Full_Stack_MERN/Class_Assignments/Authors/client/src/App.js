import './App.css';
import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';

function App() {

  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                console.log(res);
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

  return (
    <div className="App">
      <Router>
        <Main path="/" authors={authors} setAuthors={setAuthors} loaded={loaded}/>
        <AddAuthor path="/new" authors={authors} setAuthors={setAuthors} />
        <EditAuthor path="/edit/:id" authors={authors} setAuthors={setAuthors} />
      </Router>
    </div>
  );
}

export default App;