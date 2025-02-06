import React from 'react'
import TodoItem from './TodoItem';
import './todoList.css'

function TodoList({todos, setTodos}) {

  // Sort todos so that completed ones are at the bottom
  const sortedTodos = [...todos].sort((a, b) => a.done - b.done);

  return (
    <div>
      <ul>
        {sortedTodos.map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList