import React from 'react';
<<<<<<< HEAD
import TodoListItem from'./TodoListItem';

const todoList = [
  {
    'id': 1,
    'title': 'Complete the coding challenge on uidaily.com',
  },
  {
    'id': 2,
    'title': 'Search for a remote job'
  },
  {
    'id': 3,
    'title': 'Ask for help moving furniture next month'
  },
]
  
const TodoList = () => {
    return (
      <ul>
          {todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
      </ul>
    )
=======

const todoList = [
    {
      'id': 1,
      'title': 'Complete the coding challenge on uidaily.com'
    },
    {
      'id': 2,
      'title': 'Search for a remote job'
    },
    {
      'id': 3,
      'title': 'Ask for help moving furniture next month'
    },
  ]
  
  const TodoList = () => {
      return (
        <ul>
            {todoList.map((item) => (
            <li key={item.id}>
                <span>{item.title}</span>
            </li>
            ))}
        </ul>
      )
>>>>>>> main
  }

  export default TodoList