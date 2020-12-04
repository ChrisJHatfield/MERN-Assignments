import React, { useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import './Planets.css';

const Planets = ({id, swPlanet, setSWPlanet}) => {

    useEffect(() => {
        console.log('loading planet')
        axios.get(`https://swapi.py4e.com/api/planets/${id}/`)
            .then(response => {setSWPlanet(response.data)})
            .catch(err => navigate('/error') )
    }, [id]);

    return(
        <div className="planets">
            <h1>{swPlanet.name}</h1>
            <p><span>Climate:</span> {swPlanet.climate}</p>
            <p><span>Terrain:</span> {swPlanet.terrain}</p>
            <p><span>Surface Water:</span> {swPlanet.surface_water} </p>
            <p><span>Population:</span> {swPlanet.population}</p>
        </div>
    )
}

export default Planets;