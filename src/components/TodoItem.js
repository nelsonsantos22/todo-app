import React from 'react';

function TodoItem(props) {
    return (
        <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.info.completed} 
                    onChange={() => props.handleChange(props.info.id)}
                />
                <p>{props.info.text}</p>
        </div>
    )
}

export default TodoItem;