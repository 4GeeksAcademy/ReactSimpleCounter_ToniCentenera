import React from "react";
import { FaRegClock } from 'react-icons/fa';



//COMPONENTE CONTADOR DE SEGUNDOS
const SecondsCounter = () => {

	return (
		<div id="main-container" className="container">
			<div className="iconClock w-75 h-75"> <FaRegClock /></div>
			<div className="number w-50 h-75">0</div>
			<div className="number w-50 h-75">0</div>
			<div className="number w-50 h-75">0</div>
			<div className="number w-50 h-75">0</div>
			<div className="number w-50 h-75">0</div>
			<div className="number w-50 h-75">0</div>
		</div>
	);
};

export default SecondsCounter;




