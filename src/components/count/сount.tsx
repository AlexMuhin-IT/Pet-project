// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// import { saveAmountData, getAmountData } from "./requests";
// import "./styles.css";
import {getAmountData, saveAmountData} from "./сountApi.tsx";

export function Ount() {
	return (
		<div className="count-container">
			<div className=""></div>
			<button onClick={saveAmountData}>Save Amount</button>
			<button onClick={getAmountData}>Get Amount</button>
		</div>
	);
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
