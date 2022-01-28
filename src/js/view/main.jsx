import React from "react";
import Circles from "../component/circles.jsx";

//include images into your bundle
import "../../styles/main.css";

//create your first component
const Main = () => {
	return (
		<table className="tablaContainer">
			<tr>
				<td onClick={() => console.log("HOLA")}>
					<Circles />
				</td>

				<td>Celda 2</td>

				<td>Celda 3</td>
			</tr>

			<tr>
				<td>Celda 4</td>

				<td>Celda 5</td>

				<td>Celda 6</td>
			</tr>

			<tr>
				<td>Celda 7</td>

				<td>Celda 8</td>

				<td>Celda 9</td>
			</tr>
		</table>
	);
};

export default Main;
