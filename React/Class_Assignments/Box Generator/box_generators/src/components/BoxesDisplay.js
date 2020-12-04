import React from "react";

const BoxesDisplay = (props) => {
	const dimensions = props.dimensions;

	return (
		<div>
			{props.boxColors.map((color, index) => {
				let style = {
					backgroundColor: color,
					height: "150px",
					width: "150px",
					display: "inline-block",
					margin: "10px",
					border: "1px solid black",
                };
				return <div key={index} style={style}></div>;
			})}
		</div>
	);
};

export default BoxesDisplay;
