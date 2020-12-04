import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

const EditAuthor = (props) => {

    const { id, authors, setAuthors } = props
    const [author, setAuthor] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        console.log(id)
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateAuthor = (person) => {
        console.log(id);
        console.log(person)
        axios.put('http://localhost:8000/api/author/'+ id, person)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data);
                setAuthors([...authors, author])
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data.errors);
                const keys = Object.keys(err.response.data.errors);
                const newErrors = [];

                for( let error of keys){
                    newErrors.push(err.response.data.errors[error].message)
                }

                setErrors(newErrors);
            });
    }

    return (
        <div className="edit-authors">
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <h3>Edit this author</h3>
            {
                errors.map((error, idx) => {
                    return <p key={idx}>
                        {error}
                    </p>
                })
            }
            {loaded && <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />}
        </div>
    )
}

export default EditAuthor;