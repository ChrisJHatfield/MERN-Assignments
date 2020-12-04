import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPW};
    }

    const resetState = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPW("");
    }

    return (
        <div>
            <form className="form" onSubmit={ (e) => createUser(e) }>
                <p>
                    <label>First Name</label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
                </p>
                <p>
                    <label>Email</label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } value={ email } />
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                </p>
                <p>
                    <label>Confirm Password</label>
                    <input type="password" onChange={ (e) => setConfirmPW( e.target.value ) } value={ confirmPW } />
                </p>
                <button type="button" onClick={ resetState }>Reset State</button>
            </form>
            <div className="form-data">
                <h4>Your Form Data</h4>
                <div>
                    <label>First Name</label>
                    <p>{ firstName }</p>
                </div>
                <div>
                    <label>Last Name</label>
                    <p>{ lastName }</p>
                </div>
                <div>
                    <label>Email</label>
                    <p>{ email }</p>
                </div>
                <div>
                    <label>Password</label>
                    <p>{ password }</p>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <p>{ confirmPW }</p>
                </div>
            </div>
        </div>
    );
}
export default Form;