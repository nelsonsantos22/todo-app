import React from 'react';

function TodoItem(props) {
    const completedTaskStyle = {
        color: "#cdcdcd",
        fontStyle: "italic",
        textDecoration: "line-through" 
    }

    return (
        <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.info.completed} 
                    onChange={() => props.handleChange(props.info.id)}
                />
                <p 
                style = {props.info.completed ? completedTaskStyle : null}
                >{props.info.text}</p>
        </div>
    )
}

export default TodoItem;