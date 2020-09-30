import React from 'react';

function TodoItem(props) {
    return (
        <div>
            <p className="todo-item">
                <input type="checkbox" checked={props.info.completed}/>
                    {props.info.text}
            </p>
        </div>
    )
}

export default TodoItem;