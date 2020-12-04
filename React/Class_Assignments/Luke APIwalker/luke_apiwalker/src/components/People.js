import React, { useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import './People.css';

const People = ({ id, swPeople, setSWPeople, swPlanet, setSWPlanet}) => {

    useEffect(() => {
        console.log('loading person')
        axios.get(`https://swapi.py4e.com/api/people/${id}/`)
            .then(response => {
                
                setSWPeople(response.data)
                axios.get(`${swPeople.homeworld}`)
                    .then(response => {
                        let planetId = response.data.url.split('/')[5];
                        planetId = parseInt(planetId);
                        setSWPlanet({...response.data, planetId: planetId })
                        console.log(swPlanet);
                    })
                    .catch(err => navigate('/error'))
            })
            .catch(err => navigate('/error'))

    }, [id]);

    return(
        <div className="people">
            <h1>{swPeople.name}</h1>
            <p><span>Height:</span> {swPeople.height}</p>
            <p><span>Mass:</span> {swPeople.mass}</p>
            <p><span>Hair Color:</span> {swPeople.hair_color}</p>
            <p><span>Skin Color:</span> {swPeople.skin_color}</p>
            <p><span>Birth Year:</span> {swPeople.birth_year}</p>
            <p><span>Homeworld:</span> <Link to={`/planets/${swPlanet.planetId}`}>{swPlanet.name}</Link></p>
        </div>
    )
}

export default People;