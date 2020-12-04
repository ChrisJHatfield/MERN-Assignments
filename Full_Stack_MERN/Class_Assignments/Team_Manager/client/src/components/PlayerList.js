import React from 'react';
import { Link } from '@reach/router';

const PlayerList = ({ players }) => {

    return (
        <div className="players">
            <div className="navbar">
                <Link to='/players/list'>List</Link>
                |
                <Link to='/players/addplayer'>Add Player</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th><th>Preferred Position</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, idx) => {
                            return <tr key={idx}>
                                <td>{player.playerName}</td>
                                <td>{player.position}</td>
                                <td><Link to={`player/list/${player._id}`}><button type="button">Delete</button></Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList;