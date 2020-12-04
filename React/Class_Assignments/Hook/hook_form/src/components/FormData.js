import React from 'react';

const FormData = props => {
    const
    return (
        <div className="form-data">
            <p>Your Form Data</p>
            <div>
                <label>First Name</label>
                <p>{ props.firstName }</p>
            </div>
            <div>
                <label>Last Name</label>
                <p>{ props.lastName }</p>
            </div>
            <div>
                <label>Email</label>
                <p>{ props.email }</p>
            </div>
            <div>
                <label>Password</label>
                <p>{ props.password }</p>
            </div>
            <div>
                <label>Confirm Password</label>
                <p>{ props.confirmPW }</p>
            </div>
        </div>
    );
}
export default FormData;