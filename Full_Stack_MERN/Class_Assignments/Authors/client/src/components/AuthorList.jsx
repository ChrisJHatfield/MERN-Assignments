import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const AuthorList = ({ authors, removeFromDom }) => {

    return (
        <div className="author-list">
            <table>
                <thead>
                    <tr>
                        <th>Author</th><th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    authors.map((author, idx) => {
                        return <tr key={idx}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                                <DeleteButton authorId={author._id} updateAuthors={removeFromDom}/>
                            </td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;