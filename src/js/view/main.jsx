import React, { useState } from "react";
import Circles from "../component/circles.jsx";
import Crosses from "../component/crosses.jsx";

import "../../styles/main.css";

//create your first component
//mi idea es usar las clases de los componentes de circulo y cruz
/*const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me*/
//const [player, setPlayer] = useState();
//player == "" ? setImage : (else) otra cosa
//if(//player == "" ? setImage : (else) otra cosa)

const Main = () => {
	const [turn, setTurn] = useState(null);
	const [player, setPlayer] = useState("");
	const [matrix, setMatrix] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
	]);

	const selectTurn = () => {
		if (turn == <Circles /> && player == "") {
			turn == <Crosses />;
		}
		if (turn == <Crosses /> && player == "") {
			turn == <Circles />;
		}
	};

	const myAlert = () =>
		alert("Comienza el juego! :) Empiezan los gatitos!>^.^<");

	const calculateWinner = (squares) => {
		const winnerLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 4, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 4, 6],
			[2, 5, 8],
		];
	};

	return (
		<>
			<div>
				<button className="start" onClick={myAlert}>
					Start
				</button>
				<button className="restart">Restart</button>

				<table className="tablaContainer">
					<tbody>
						<tr>
							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>

							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>

							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>
						</tr>

						<tr>
							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>

							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>

							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>
						</tr>

						<tr>
							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>

							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>

							<td
								onClick={() => {
									setTurn(selectTurn());
								}}>
								{turn}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Main;
