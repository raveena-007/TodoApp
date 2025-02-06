import React, { useState } from 'react';
import './form.css';

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  const toChangeTodo = (e) => {
    setTodo({ name: e.target.value, done: false });
  };

  const submitButton = (e) => {
    e.preventDefault();
    if (todo.name.trim()) {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false }); // Reset to initial state
    }
  };

  return (
    <>
      <div className='container'>
        <form className='inputContainer'>
          <input
            className='todoInputBox'
            type="text"
            value={todo.name}
            onChange={toChangeTodo}
            placeholder='Enter Todo items...'
          />
          <button className='todoButton' type="submit" onClick={submitButton}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
