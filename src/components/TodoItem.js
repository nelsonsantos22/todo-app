import React from 'react';

function TodoItem(props) {
    return (
        <div>
            <p className="todo-item">
                <input type="checkbox"/>
                    {props.info.text}
            </p>
        </div>
    )
}

export default TodoItem;