import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';


const AddAuthor = ({ authors, setAuthors }) => {

    const [errors, setErrors] = useState([]);

    const addAuthorSubmit = (formSubmission) => {
        console.log(formSubmission);
        axios.post('http://localhost:8000/api/author', formSubmission)
            .then(res => {
                console.log(res.data);
                setAuthors([...authors, res.data]);
                navigate('/');
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
        <div className="add-author">
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <h3>Add a new author:</h3>
            {
                errors.map((error, idx) => {
                return <p key={idx}>{error}</p>
                })
            }
            <AuthorForm onSubmitProp={addAuthorSubmit} initialName="" />
        </div>
    )
}

export default AddAuthor;