import React, { useState } from "react";

const Tabs = ({ allTabs }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	const onClickHandler = (idx) => {
		console.log(allTabs[idx]);
		setSelectedTab(idx);
	};

	const selectedTabStyle = {
		background: "black",
		color: "white",
		height: "35px",
		width: "120px",
		paddingTop: "10px",
		border: "1px solid gray",
		fontSize: "14pt",
	};

	const unselectedTabStyle = {
		background: "white",
		color: "black",
		height: "35px",
		width: "120px",
		paddingTop: "10px",
		border: "1px solid gray",
		fontSize: "14pt",
	};

	return (
		<div className="allTabs">
			<div className="tabs">
				{allTabs.map((value, idx) => (
					<p
						style={selectedTab === idx ? selectedTabStyle : unselectedTabStyle}
						key={idx}
						onClick={(e) => {
							onClickHandler(idx);
						}}
					>{value.tab}</p>
				))}
			</div>
			<div className="content">
				<p>{allTabs[selectedTab].content}</p>
			</div>
		</div>
	);
};

export default Tabs;
