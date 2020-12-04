import React, { useState } from 'react';
import TodoAdd from './TodoAdd';
import TodoRemove from './TodoRemove';
import TodoComplete from './TodoComplete';
import './TodoList.css';

const TodoList = () => {

    const [todoList, setTodoList] = useState([
        { task: 'Get Mern black belt.', complete: false },
    ]);

    const completeStyle = {
        textDecoration : 'line-through',
    }

    const incompleteStyle = {
        textDecoration : 'none',
    }

    return(
        <div>
            <TodoAdd todoList={ todoList } setTodoList={setTodoList} />
            <div className="tasks">
                {todoList.map((key, idx) => (
                    <div key={idx}>
                        <p style={ key.complete === true ? completeStyle : incompleteStyle }>{ key.task }</p>
                        <TodoComplete todoList={ todoList } setTodoList={ setTodoList } idx={idx} />
                        <TodoRemove todoList={ todoList } setTodoList={ setTodoList } idx={idx} />
                    </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default TodoList;