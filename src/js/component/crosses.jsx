import React from "react";

//include images into your bundle
import "../../styles/crosses.css";
import dog from "../../img/perrito.png";

//create your first component
const Crosses = () => {
	return (
		<>
			<div className="cruz">
				<img src={dog} className="dog" />
			</div>
		</>
	);
};

export default Crosses;