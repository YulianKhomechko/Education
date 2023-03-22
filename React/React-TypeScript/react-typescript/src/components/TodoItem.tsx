import React from 'react'

import {TodoClass} from "../types/todo";
import {deleteHandlerType} from "../App";

export const TodoItem: React.FC<{ todo: TodoClass, handleDelete: deleteHandlerType}> = ({todo, handleDelete}) => {
    return (
        <li>{todo.text}<span onClick={() => handleDelete(todo.id)} style={{marginLeft: 'auto', color: 'red', cursor: 'pointer'}}>X</span>
        </li>
    )
}