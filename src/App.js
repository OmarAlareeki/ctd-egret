import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
<<<<<<< HEAD
import './style.css';
function App() {
  
  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={setNewTodo} />
        <p>{newTodo}</p>      
=======
import './style.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
        <AddTodoForm />
>>>>>>> main
        <TodoList />
    </div>
  );
}

export default App;
