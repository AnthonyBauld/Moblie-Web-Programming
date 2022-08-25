// "I Anthony Bauld, certify that this material is my original work. No other person's work has been used without due acknowledgement. 
// I have not made my work available to anyone else."

// Imports react hooks from "react".
import React from "react";
// Imports the "app" styling css sheet.
import "./Style.css";
// Imports the List.js.
import List from "./List";
// Creates a function "App" that returns the main appilcation "List".
function App() {
  return (
    // Creates a div with the classname "app".
    <div className="app">
      <List />
    </div>
  );
}
// The App.js file is exported.
export default App;
