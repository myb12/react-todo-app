import React, { useState, useRef, useEffect } from "react";
import './TodoForm.css'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="container">
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="todo-input edit"
            />
            <button onClick={handleSubmit} className="todo-button edit mt-2 mt-sm-0">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button mt-2 mt-sm-0">
              Add todo
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
