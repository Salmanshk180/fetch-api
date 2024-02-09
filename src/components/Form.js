import React, { Fragment, useState } from "react";
import "./Form.css";
const Form = () => {
  const [todo, setTodo] = useState("");
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://todos-4d0f6-default-rtdb.firebaseio.com/todos.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            todo : todo,
          }),
        }
        );
        setTodo("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={todo}
          className="input-form"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
