import React from 'react';
import { FaRegClock } from 'react-icons/fa';




//COMPONENTE CONTADOR DE SEGUNDOS
const SecondsCounter = (props) => {

	// LOGICA DE CONTADOR-------------------------------------------

	let digit1 = props.seconds;
	let digit2 = 0;
	let digit3 = 0;
	let digit4 = 0;
	let digit5 = 0;
	let digit6 = 0;

	if (props.seconds >= 9) {
		digit2 += Math.floor(props.seconds / 10);
		digit1 = props.seconds % 10;
	} if (digit2 >= 9) {
		digit3 += Math.floor(digit2 / 10);
		digit2 = digit2 % 10;
	} if (digit3 >= 9) {
		digit4 += Math.floor(digit3 / 10);
		digit3 = digit3 % 10;
	} if (digit4 >= 9) {
		digit5 += Math.floor(digit4 / 10);
		digit4 = digit4 % 10;
	} if (digit5 >= 9) {
		digit6 += Math.floor(digit5 / 10);
		digit5 = digit5 % 10;
	} else {null}

		// --------------------------------------------------------

		// BOTONES DE STAR Y STOP----------------------------------

		const handleStart = () => {

		}
		
		const handleStop = () => {

		}

		const reverseCounter = () => {
			let count = props.seconds;
			setInterval(() => {
				count -=1
			},1000)
		}

        // --------------------------------------------------------


	// DISEÑO DE CONTADOR -----------------------------------------

		return (
			<div id="main-container" className="container">
				<div className="iconClock w-75 h-75"> <FaRegClock /></div>
				<div className="number w-50 h-75">{digit6}</div>
				<div className="number w-50 h-75">{digit5}</div>
				<div className="number w-50 h-75">{digit4}</div>
				<div className="number w-50 h-75">{digit3}</div>
				<div className="number w-50 h-75">{digit2}</div>
				<div className="number w-50 h-75">{digit1}</div>
				<div>
					<button type="text" onClick={reverseCounter}>Reverse</button>
				</div>
			</div>
			
			
		);
	};

	// ------------------------------------------------------------

	export default SecondsCounter;




