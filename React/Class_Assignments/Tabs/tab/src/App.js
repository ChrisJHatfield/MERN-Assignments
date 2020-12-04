import React, { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";

function App() {
	const [tabs, setTabs] = useState("");

	const [allTabs, setAllTabs] = useState([
		{
			tab: "Tab 1",
			content: "Tab 1 content is showing here.",
		},
		{
			tab: "Tab 2",
      content: "Tab 2 content is showing here.",
		},
		{
			tab: "Tab 3",
			content: "Tab 3 content is showing here.",
		},
  ]);

	return (
		<div className="App">
			<Tabs
				tabs={tabs}
				allTabs={allTabs}
			/>
		</div>
	);
}

export default App;
