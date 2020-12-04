import React from 'react';
import './DisplayColor.css';

const DisplayColor = ({word, wordColor, backColor}) => {

    const userStyle = {
        backgroundColor: `${backColor}`,
        color: `${wordColor}`,
    }

    return(
        <div className="wordColor">
            <p style={userStyle}>The word is: {word}</p>
        </div>
    )
}

export default DisplayColor;