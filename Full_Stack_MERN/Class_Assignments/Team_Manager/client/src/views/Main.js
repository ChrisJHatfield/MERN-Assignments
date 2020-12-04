import React, { useEffect, useState } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import AddPlayer from '../components/AddPlayer';


const Main = () => {

    const [players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setPlayers(res.data))
            .catch(err => {
                console.log(err);
            })
    }, []);

    const AddNewPlayer = (formSubmission) => {
        axios.post('http://localhost:8000/api/player', formSubmission)
            .then(res => {
                setPlayers(...players, res.data);
                navigate('/players/list')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const keys = Object.keys(err.response.data.errors);
                const newErrors = [];

                for(let error of keys){
                    newErrors.push(err.response.data.errors[error].message)
                }
                setErrors(newErrors);
            })
    }

    return (
        <div className="main">
            <div className="navbar">
                <Link to='players/list'>Manage Players</Link>
                <Link to='status/game/1'>Manage Player Status</Link>
            </div>
            <Router>
                <PlayerList path="players/list" players={players} />
                <AddPlayer path ="players/addplayer" AddNewPlayer={AddNewPlayer} errors={errors} />
            </Router>
        </div>
    )
}

export default Main;