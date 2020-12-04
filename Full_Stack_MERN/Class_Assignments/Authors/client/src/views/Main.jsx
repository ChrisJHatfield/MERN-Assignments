import React from 'react';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

const Main = ({ authors, setAuthors, loaded }) => {

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter( (author) => author._id !== authorId))
    }

    return (
        <div className="main">
            <h1>Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;