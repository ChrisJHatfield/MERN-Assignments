import React, { useState } from "react";
import "./App.css";
import BoxForm from "./components/BoxForm";
import BoxesDisplay from "./components/BoxesDisplay";

function App() {
	const [boxColors, setBoxColors] = useState([]);
	const [dimensions, setDimensions] = useState("150");

	return (
		<div className="App">
			<BoxForm
				boxColors={boxColors}
				setBoxColors={setBoxColors}
				dimensions={dimensions}
				setDimensions={setDimensions}
			/>
      <BoxesDisplay 
        boxColors={boxColors}
        dimensions={dimensions}
      />
		</div>
	);
}

export default App;
