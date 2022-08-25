// "I Anthony Bauld, certify that this material is my original work. No other person's work has been used without due acknowledgement. 
// I have not made my work available to anyone else."

// Imports react hooks from "react".
import React, { useState } from "react";
// Imports the Form.js.
import Form from "./Form";
// Imports the Todo.js.
import Todo from "./Todo";
// Creates a function() called "List".
function List() {
  // Sets the edit to the usage states using a const variable. 
  const [lists, setLists] = useState([]);
  // Creates a const variable called "addList".
  const addList = (list) => {
    // If the list text is not equal to the list test, an if statement is created.
    if (!list.text || /^\s*$/.test(list.text)) {
      // The if statement is returned.
      return;
    }
    // Creates a const newList object that contains the list and lists variables.
    const newLists = [list, ...lists];
    // Sets the setLists to newLists.
    setLists(newLists);
  };
  // Creates a const variable called "editList".
  const editList = (listId, value) => {
    // If the list text is not equal to the list test, an if statement is created.
    if (!value.text || /^\s*$/.test(value.text)) {
      // The if statement is returned.
      return;
    }
    // Sets the previous map's setLists.
    setLists((prev) => prev.map((item) => (item.id === listId ? value : item)));
  };
  // Creates a const variable called "removeList".
  const removeList = (id) => {
    // Creates an array that filters the lists.
    const Array = [...lists].filter((list) => list.id !== id);
    // Sets the setLists to the "Array".
    setLists(Array);
  };
  // Returns components.
  return (
    <>
      <h1>React TODO List - Anthony. Bauld</h1>
      <Form onSubmit={addList} />
      <Todo
        lists={lists}
        removeList={removeList}
        editList={editList}
      />
    </>
  );
}
// The List.js file is exported.
export default List;
