import React from "react";

//include images into your bundle
import "../../styles/circles.css";
import cat from "../../img/gatito.png";

//create your first component
const Circles = () => {
	return (
		<>
			<div className="circulo">
				<img src={cat} className="cat" />
			</div>
		</>
	);
};

export default Circles;
