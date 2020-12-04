import React from "react";

class TodoList extends React.Component {

    constructor(prop){
        super(prop);
    }

    render () {
        return (
            <div className="list">
                <p>Things I need to do:</p>
                <ul>
                    <li>* Learn React</li>
                    <li>* Climb Mt. Everest</li>
                    <li>* Run a marathon</li>
                    <li>* Feed the dogs</li>
                </ul>
            </div>
        )
    }
}
export default TodoList;