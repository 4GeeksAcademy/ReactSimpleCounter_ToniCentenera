
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0

const counterAlert = () => {
    if(counter === 369) {
        alert("Se alcanzó el tiempo máximo")
    }
}

setInterval(() => {
    ReactDOM.render(<SecondsCounter seconds={counter} />, document.querySelector("#app"));
    counter += 1;
    counterAlert();
}, 1000);




