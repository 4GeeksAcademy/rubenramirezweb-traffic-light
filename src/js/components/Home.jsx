import React from "react";
// import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// const [color, setColor] = useState("red") 

	return (
		<div className="traffic-light">
			<div className="tube"></div>
			<div className="box">
				<div className="red light"></div>
				<div className="yellow light"></div>
				<div className="green light"></div>
			</div>
		</div>
	);
};

export default Home;