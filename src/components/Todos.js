import React, { Fragment, useEffect, useState } from "react";
import "./Todos.css";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading,setLoading] =useState(false);
  const getData = async () => {
    try {
        setLoading(true);
      const response = await fetch(
        "https://todos-4d0f6-default-rtdb.firebaseio.com/todos.json"
      );
      const data = await response.json();
      if (data) {
        const todoArray = Object.values(data);
        setTodos(todoArray);
    }
    setLoading(false);
} catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <button
        onClick={getData}
        style={{
          padding: "10px",
          backgroundColor: "rgb(0,150,10)",
          color: "white",
        }}
      >
        Fetch
      </button>
      <div className="todo-container">
        {loading && <p>Loading.....</p>}
        {todos.length == 0 && !loading && <p style={{ textAlign: "center" }}>No Todo</p>}
        {todos.length > 0 && !loading &&
          todos.map((todo, index) => <p key={index}>{todo.todo}</p>)}
      </div>
    </Fragment>
  );
};

export default Todos;
