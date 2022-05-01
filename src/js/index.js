import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
ReactDOM.render(
	<SecondsCounter seconds={3434} />,
	document.querySelector("#app")
);
