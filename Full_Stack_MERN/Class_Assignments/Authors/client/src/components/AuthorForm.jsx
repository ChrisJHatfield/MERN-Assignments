import React, { useState } from 'react';
import { Link } from '@reach/router';

const AuthorForm = (props) => {

    const { initialName, onSubmitProp } = props;
    const [fullName, setFullName] = useState(initialName);

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name: fullName });
        setFullName("");
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" name="name" value={fullName} onChange={ (e) => setFullName(e.target.value)} />
                <Link to="/"><button>Cancel</button></Link>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm;