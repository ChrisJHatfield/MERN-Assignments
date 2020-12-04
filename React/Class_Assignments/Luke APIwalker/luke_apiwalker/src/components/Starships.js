import React, { useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import './Starship.css';

const Starships = ({ id, swStarships, setSWStarships}) => {

    useEffect(() => {
        console.log('loading starship')
        axios.get(`https://swapi.py4e.com/api/starships/${id}/`)
            .then(response => {setSWStarships(response.data)})
            .catch(err => navigate('/error'))
    }, [id]);

    return(
        <div className="starships">
            <h1>{swStarships.name}</h1>
            <p><span>Model:</span> {swStarships.model}</p>
            <p><span>Manufacturer:</span> {swStarships.manufacturer}</p>
            <p><span>Cost in Credits:</span> {swStarships.cost_in_credits}</p>
            <p><span>Crew:</span> {swStarships.crew}</p>
            <p><span>Passengers:</span> {swStarships.passengers}</p>
            <p><span>Consumables:</span> {swStarships.consumables}</p>
            <p><span>Hyperdrive Rating:</span> {swStarships.hyperdrive_rating}</p>
            <p><span>Starship Class:</span> {swStarships.starship_class}</p>
        </div>
    )
}

export default Starships;