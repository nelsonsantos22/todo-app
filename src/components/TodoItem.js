import React from 'react';

function TodoItem(props) {
    return (
        <div>
            <p className="todo-item">
                <input type="checkbox" checked={props.info.completed} onChange={() => console.log("changed")}/>
                    {props.info.text}
            </p>
        </div>
    )
}

export default TodoItem;