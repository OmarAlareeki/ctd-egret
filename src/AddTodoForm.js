import React from 'react'

<<<<<<< HEAD
const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault();
        let titleTodo = event.target.title.value;
        props.onAddTodo(titleTodo)
        event.target.reset();
    }
    
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle" >Title: </label>
                <input id="todoTitle" type="text" name="title" />
                <button type="submit">Add</button>
            </form>
=======
const AddTodoForm = () => {
    return (
        <div>
        <form>
            <label htmlFor="todoTitle" >Title: </label>
            <input id="todoTitle" type="text"/>
            <button>Add</button>
        </form>
>>>>>>> main
        </div>
    )
}

<<<<<<< HEAD
export default AddTodoForm
=======
export default AddTodoForm
>>>>>>> main
