// "I Anthony Bauld, certify that this material is my original work. No other person's work has been used without due acknowledgement. 
// I have not made my work available to anyone else."

// Imports react hooks from "react".
import React, { useState } from "react";
// Imports the Form.js.
import Form from "./Form";
// React icon to remove a item from the todo list imported from https://react-icons.github.io/react-icons.
import { AiOutlineClose } from "react-icons/ai";
// React icon to edit a item from the todo list imported from https://react-icons.github.io/react-icons.
import { AiFillEdit } from "react-icons/ai";
// Creates the "todo" const variable, which sets an array of variables for the function.
const Todo = ({ lists, completeList, removeList, editList }) => {
  // Sets the edit to the usage states using a const variable. 
  const [edit, setEdit] = useState({
    // Sets the id to null.
    id: null,
    // Sets the value to "".
    value: "",
  });
  // Sets the value of the function editList with a const submitEdit.
  const submitEdit = (value) => {
    // Sets the id and value of the editList.
    editList(edit.id, value);
    // Sets the id and value of the edit.
    setEdit({
      // Sets the id to null.
      id: null,
      // Sets the value to "".
      value: "",
    });
  };
  // If the edit is equivalent to the id, an if statement is created.
  if (edit.id) {
    // Creates a return statement that, when the form is submitted, returns the form edit.
    return <Form edit={edit} onSubmit={submitEdit} />;
  }
  // Returns a list map where the data collection type is pairs and the data is saved as pairs (list, index).
  return lists.map((list, index) => (
    <div className={list.isComplete ? "row complete" : "row"} key={index}>
      <div key={list.id} onClick={() => completeList(list.id)}> {list.text}</div>
      <div className="react-icons">
        <AiOutlineClose onClick={() => removeList(list.id)}  className="delete-icon"/>
        <AiFillEdit onClick={() => setEdit({ id: list.id, value: list.text })} className="edit-icon"/>
      </div>
    </div>
  ));
};
// The Todo.js file is exported.
export default Todo;
