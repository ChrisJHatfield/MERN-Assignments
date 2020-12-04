import React, {useState} from 'react';

export default props => {
    const { onSubmitProp } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
        setFirstName("");
        setLastName("");
    };

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} value={lastName}/>
            </p>
            <button type="submit">Submit</button>
        </form>
    )
}
