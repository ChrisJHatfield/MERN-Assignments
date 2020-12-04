import React, { useState } from 'react';
import './TodoAdd.css';

const TodoAdd = ({todoList, setTodoList}) => {

    const [newTask, setNewTask] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();
        let addTask = { task: newTask, complete: false };
        console.log(addTask);
        setTodoList(([...todoList, addTask]));
        setNewTask('');
    };

    return(
        <div className="add">
            <form onSubmit={SubmitHandler}>
                <input type="text" onChange={ (e) => setNewTask(e.target.value) } value={ newTask }></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoAdd;