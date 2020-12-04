import axios from 'axios';
import React from 'react';

const DeleteButton = ({ authorId, updateAuthors }) => {

    const deleteHandler = () => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                console.log(res);
                updateAuthors(authorId);
            })
            .catch(err => console.log(err))
    } 

    return (
        <button onClick={ deleteHandler }>Delete</button>
    )
}

export default DeleteButton;