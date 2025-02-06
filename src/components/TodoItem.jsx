import React from 'react';
import './todoItem.css';

function TodoItem({ item, todos, setTodos }) {
  
  // Delete the todo
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo !== item));
  };

  const toggleClick = () => {
    // Toggle the done status based on the clicked item
    setTodos(
      todos.map((todo) => 
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  
  return (
    <li>
      {/* Render the name of the item, clicking it toggles the done status */}
      <span onClick={toggleClick} className={item.done ? 'completed' : ''}>
        {item.name}
      </span>
      
      {/* Delete button */}
      <button onClick={handleDelete} style={{ marginLeft: '10px' }} className="deleteButton">
        x
      </button>
      <hr /> {/* Horizontal line after each todo item */}
    </li>
  );
}

export default TodoItem;
