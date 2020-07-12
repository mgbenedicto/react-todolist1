import React from 'react'



function ToDoItem({todo, markComplete, id, delToDo}) {

    const btnStyle = {
        background: '#ff0000',
        color: 'white',
        padding: '5px 9px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }

    const getStyle = ()=>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: todo.completed ? 'line-through' : 'none'
        }
    }

    return (
        <div style={getStyle()}>
            <p>
                <input type='checkbox' onChange={(event)=>{
                    markComplete(event, id, todo);
                }}/>{' '}
                {todo.title}
                <button style={btnStyle} onClick={(event)=>{
                    delToDo(event, id, todo)
                }}>
                x
                </button>
            </p>
        </div>
    )
}



export default ToDoItem;
