//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle

//import your own components
import Main from "../js/view/main.jsx";

//render your react application
ReactDOM.render(<Main />, document.querySelector("#app"));
