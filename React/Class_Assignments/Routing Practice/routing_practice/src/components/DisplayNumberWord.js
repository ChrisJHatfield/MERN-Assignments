import React from "react";

const DisplayNumber = ({ numberOrWord }) => {
	return (
		<div>
			<p>
				{isNaN(+numberOrWord) === false
					? `The number is: ${numberOrWord}`
					: `The word is: ${numberOrWord}`}
			</p>
		</div>
	);
};

export default DisplayNumber;