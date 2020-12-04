import React from 'react';
import './TodoComplete.css';

const TodoComplete = ({ todoList, setTodoList, idx }) => {

    const onComplete = () => {
        let completeTask = [...todoList];
        completeTask[idx].complete = !completeTask[idx].complete;
        setTodoList(completeTask);
    }

    return(
        <div className="check">
            <label>
                <input type="checkbox" checked={ todoList.complete } onChange={ onComplete } />
            </label>
        </div>
    );
}

export default TodoComplete;