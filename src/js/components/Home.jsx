import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("blue");

	const changeColor = () => {
		const colors = ['red', 'yellow', 'green'];
		const ramdomColor = colors[Math.floor(Math.random() * colors.length)];
		console.log(ramdomColor);
		setColor(ramdomColor);
	}

	return (
		<div className="traffic-light">
			<div className="tube"></div>
			<div className="box">
				<div
					// onClick={() => setColor("red")}
					className={"red light" + (color === "red" ? " glow" : "")}>
				</div>

				<div
					// onClick={() => setColor("yellow")}
					className={"yellow light" + (color === "yellow" ? " glow" : "")}>
				</div>

				<div
					// onClick={() => setColor("green")}
					className={"green light" + (color === "green" ? " glow" : "")}>
				</div>
			</div>
			<p>By <strong>RubenRamirezWeb</strong></p>
			<button onClick={changeColor} className="button">Clic para cambiar de color</button>
		</div>
	);
};

export default Home;