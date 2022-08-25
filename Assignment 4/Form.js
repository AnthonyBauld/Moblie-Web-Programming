// "I Anthony Bauld, certify that this material is my original work. No other person's work has been used without due acknowledgement. 
// I have not made my work available to anyone else."

// Imports react hooks from "react".
import React, { useState, useEffect, useRef } from "react";
// Creates the "From" function, which takes a props parameter.
function Form(props) {
  // Creates a const variable "input" that allows the user to change the value of the input.
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  // Creates the "inputReference" const variable, which sets the useRef to null.
  const inputReference = useRef(null);
  // Sets the useEffect hook to conduct a side effect within the component.
  useEffect(() => {
    // Sets the focus method for the current inputReference, which tells the browser which element is being acted on.
    inputReference.current.focus();
  });
  // Creates a handleChange variable that handles input changes using react component implementations.
  const handleChange = (e) => {
    // Sets the input value.
    setInput(e.target.value);
  };
  // Creates a handleSubmit variable that asynchronously submits the form.
  const handleSubmit = (e) => {
    // Creates a preventDefault method that instructs the user agent that if the event isn't explicitly handled, the event's default action should not be taken.
    e.preventDefault();
    // Creates a prop that executes on submission.
    props.onSubmit({
      // Generates a random number between 0 and 100 and stores it in the "id".
      id: Math.floor(Math.random() * 100),
      // Sets the input variable to "text".
      text: input,
    });
    // Sets input to "".
    setInput("");
  };
  // Returns components.
  return (
    // Creates a form that on submission will that asynchronously submits the form.
    <form onSubmit={handleSubmit} className="list-form">
      {props.edit ? ( 
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputReference}
            className="input edit" />
          <button onClick={handleSubmit} className="button edit">Edit</button>
        </>
      ) : (
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            className="input"
            ref={inputReference} />
          <button onClick={handleSubmit} className="button">Add</button>
        </>
      )}
    </form>
  );
}
// The Form.js file is exported.
export default Form;
