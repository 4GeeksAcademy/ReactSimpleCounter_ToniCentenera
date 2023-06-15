import React from "react";
import { FaRegClock } from 'react-icons/fa';



//COMPONENTE CONTADOR DE SEGUNDOS
const SecondsCounter = () => {

	return (
		<div id="main-container" className="container">
			<div className="iconClock"> <FaRegClock /></div>
			<div className="number">0</div>
			<div className="number">0</div>
			<div className="number">0</div>
			<div className="number">0</div>
			<div className="number">0</div>
			<div className="number">0</div>
		</div>
	);
};

export default SecondsCounter;




