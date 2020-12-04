import React, { useState } from 'react';
import { Link } from '@reach/router';

const AddPlayer = ({ AddNewPlayer, errors }) => {

    const [playerName, setPlayerName] = useState("");
    const [position, setPosition] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        AddNewPlayer({
            playerName: playerName,
            position: position
        })
        setPlayerName('');
        setPosition('');
    }

    return (
        <div className="addplayer">
            <div className="navbar">
                <Link to='/players/list'>List</Link>
                |
                <Link to='/players/addplayer'>Add Player</Link>
            </div>
            <div className="form">
                <h1>Add Player</h1>
                <div className="errors">
                    {
                        errors.map((error, idx) => {
                        return <p key={idx}>{error}</p>
                        })
                    }
                </div>
                <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>Player Name:</label>
                        <input type="text" name="playerName" value={playerName} onChange={ e => setPlayerName(e.target.value)}/>
                    </p>
                    <p>
                        <label>Preferred Position:</label>
                        <input type="text" name="position" value={position} onChange={ e => setPosition(e.target.value)}/>
                    </p>
                    <button type="submit" disabled={errors ? false : true}>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddPlayer;