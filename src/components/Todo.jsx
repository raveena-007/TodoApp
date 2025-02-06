import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

function Todo() {
  const [todos, setTodos] = useState([]);

  const totalCount = todos.length; // Get the total count of todos
  // Calculate the number of completed todos
  const completedTodo = todos.filter(todo => todo.done).length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodo={completedTodo} totalCount={totalCount} />
    </div>
  );
}

export default Todo;
