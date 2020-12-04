import React, { useState } from "react";
import './BoxForm.css';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [dimensions, setDimensions] = useState("150");

	const handleSubmit = (e) => {
		e.preventDefault();
		let boxColors = props.boxColors;
		props.setBoxColors([...boxColors, color]);
        setColor("");
        props.setDimensions( dimensions );
        setDimensions("150")
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<label>Color</label>
				<input
					type="text"
					onChange={(e) => setColor(e.target.value)}
					value={color}
				/>
                <label>Width/Height</label>
                <input
                    type="text"
                    onChange={(e) => setDimensions(e.target.value)}
                    value={dimensions}
                />
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default BoxForm;
