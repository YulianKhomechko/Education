import React, {useContext} from "react";

import {TodosContext} from "../store/todos-contex";
import {TodoItem} from "./TodoItem";

export const Todos: React.FC = () => {
    const context = useContext(TodosContext)

    return (
        <ul>
            {context.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={context.removeTodo}/>)}
        </ul>
    )
}