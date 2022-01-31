import React, { useState } from "react";
import Circles from "../component/circles.jsx";
import Crosses from "../component/crosses.jsx";

//include images into your bundle
import "../../styles/main.css";

//create your first component
//mi idea es usar las clases de los componentes de circulo y cruz

//const [count, setCount] = useState(0);

const Main = () => {
	const [image, setImage] = useState();
	//const [player, setPlayer] = useState();
	//player == "" ? setImage : (else) otra cosa

	return (
		<>
			<div>
				<button className="start">Start</button>
				<button className="restart">Restart</button>

				<table className="tablaContainer">
					<tbody>
						<tr>
							<td
								onClick={() => {
									//if(	//player == "" ? setImage : (else) otra cosa)
									setImage(<Circles />);
								}}>
								{image}
							</td>

							<td>
								<Crosses />
							</td>

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
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Main;
