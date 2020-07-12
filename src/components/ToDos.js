import React from 'react';
import ToDoItem from "./ToDoItem"

const ToDos = ({todos, markComplete, delToDo}) => {
    console.log("Todos log");
    console.log(todos);

    return todos.map((todo)=>{
        return <ToDoItem 
                    key={todo.id} 
                    id={todo.id} 
                    todo={todo} 
                    markComplete={markComplete}
                    delToDo={delToDo}
                    />
    });

}

export default ToDos;
