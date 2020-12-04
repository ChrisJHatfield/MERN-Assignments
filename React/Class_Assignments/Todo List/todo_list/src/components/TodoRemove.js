import React from 'react';
import './TodoRemove.css';

const TodoRemove = ({ todoList, setTodoList, idx}) => {

    const ridTask = (e) => {
        e.preventDefault();
        let removeTask = todoList.filter((_, index) => index !== idx)
        setTodoList(removeTask);
    };

    return(
        <div className="removeButton">
            <form onSubmit={ ridTask }>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
}
export default TodoRemove;