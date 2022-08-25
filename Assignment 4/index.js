// "I Anthony Bauld, certify that this material is my original work. No other person's work has been used without due acknowledgement. 
// I have not made my work available to anyone else."

// Imports react hooks from "react".
import React from "react";
// Imports react doms from "react-dom".
import ReactDOM from "react-dom";
// Imports the App.js.
import App from "./App";
// Creates a reactdom method for rendering all react elements to the webpage.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // The element id of the div "root" is returned.
  document.getElementById("root")
);
