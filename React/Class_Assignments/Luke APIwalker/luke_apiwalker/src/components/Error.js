import React from "react";
import { Link } from "@reach/router";
import './Error.css';

const ErrorFound = () => {
	return (
		<div className="error">
			<img
                src="https://media2.giphy.com/media/l2JJKs3I69qfaQleE/source.gif"
				alt="obiwan.gif"
			></img>
            <p>"These aren't the droids you're looking for"</p>
			<Link to="/">Home</Link>
		</div>
	);
};

export default ErrorFound;