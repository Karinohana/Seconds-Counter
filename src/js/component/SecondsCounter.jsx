import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		let interval = setInterval(() => {
			setCounter((previous) => previous + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [counter]);
	console.log(counter);
	let one = counter;
	let two = Math.floor(counter / 10);
	let three = Math.floor(counter / 100);
	let four = Math.floor(counter / 1000);
	let five = Math.floor(counter / 10000);
	let six = Math.floor(counter / 100000);
	return (
		<div
			className="container"
			style={{
				display: "flex",
				background: "black",
				color: "white",
				margin: "50px",
				fontSize: "50px",
				height: "50px",
				lineHeight: "50px",
			}}>
			<div className="clock"></div>
			<div className="sixthDigit margin">{six % 10}</div>
			<div className="fifthDigit margin">{five % 10}</div>
			<div className="fourthDigit margin">{four % 10}</div>
			<div className="thirdDigit margin">{three % 10}</div>
			<div className="secondDigit margin">{two % 10}</div>
			<div className="firstDigit margin">{one % 10}</div>
		</div>
	);
};
export default SecondsCounter;
