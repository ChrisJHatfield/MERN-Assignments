import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPeople(res.data)
                setLoaded(true);
            });
    }, [])

    const createPerson = person => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res => {
                console.log("Response: ", res)
                setPeople([...people, res.data]);
            })
            .catch(err => console.log("Error: ", err))
    }

    return(
        <div>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
            <hr/>
            {loaded && <PersonList people={people} />}
        </div>
    )
}