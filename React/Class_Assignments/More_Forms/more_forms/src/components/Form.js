import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password}
        console.log(newUser);
    }

    const firstNameValidator = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!")
        } else if (e.target.value.length < 3) {
            setFirstNameError("First Name must be at least 2 characters or longer!")
        }
        else {
            setFirstNameError(
                ''
            )
        }
    }

    const lastNameValidator = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!")
        } else if (e.target.value.length < 3) {
            setLastNameError("Last Name must be at least 2 characters or longer!")
        }
        else {
            setLastNameError(
                ''
            )
        }
    }

    const emailValidator = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!")
        } else if(e.target.value.length < 6) {
            setEmailError("Email must be at least 5 characters or longer!")
        }
        else {
            setEmailError(
                ''
            )
        }
    }

    const passwordValidator = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!")
        } else if (e.target.value.length < 9) {
            setPasswordError("Password must be at least 8 characters or longer!")
        } else if (e.target.value === confirmPW){
            setConfirmPWError('')
        }
        else {
            setPasswordError(
                ''
            )
        }
    }

    const confirmPWValidator = (e) => {
        setConfirmPW(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPWError("Confirm Password is required!")
        } else if (e.target.value !== password) {
            setConfirmPWError("Passwords must match!")
        }
        else {
            setConfirmPWError(
                ''
            )
        }
    }

    return (
        <form className="form" onSubmit={ createUser }>
            <div>
                <label>First Name</label>
                <input type="text" onChange={ firstNameValidator} value={ firstName } />
            </div>
            {
                firstNameError ?
                <p className="errors">{ firstNameError }</p> :
                ''
            }
            <div>
                <label>Last Name</label>
                <input type="text" onChange={ lastNameValidator } value={ lastName } />
            </div>
            {
                lastNameError ?
                <p className="errors">{ lastNameError }</p> :
                ''
            }
            <div>
                <label>Email</label>
                <input type="email" onChange={ emailValidator } value={ email } />
            </div>
            {
                emailError ?
                <p className="errors">{ emailError }</p> :
                ''
            }
            <div>
                <label>Password</label>
                <input type="password" onChange={ passwordValidator } value={ password } />
            </div>
            {
                passwordError ?
                <p className="errors">{ passwordError }</p> :
                ''
            }
            <div>
                <label>Confirm Password</label>
                <input type="password" onChange={ confirmPWValidator } value={ confirmPW } />
            </div>
            {
                confirmPWError ?
                <p className="errors">{ confirmPWError }</p> :
                ''
            }
            <button type="submit">Create New User</button>
        </form>
    )
}
export default Form;