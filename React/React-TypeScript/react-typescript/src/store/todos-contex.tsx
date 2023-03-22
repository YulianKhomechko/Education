import React, {useState} from 'react'

import {TodoClass} from "../types/todo";

type TodosContextObject = {
    todos: TodoClass[],
    addTodo: (todoText: string) => void,
    removeTodo: (id: number) => void
}

export const TodosContext = React.createContext<TodosContextObject>({
    todos: [],
    addTodo: (todoText: string) => {
    },
    removeTodo: (id: number) => {
    }
})

type TodoContextProviderProps = {
    children: React.ReactNode
}

export const TodoContextProvider = ({children}: TodoContextProviderProps) => {
    const [todos, setTodos] = useState<TodoClass[]>([])

    const addTodoHandler = (todoText: string) => {
        setTodos(ps => ps.concat(new TodoClass(todoText)))
    }

    const deleteHandler = (id: number) => {
        setTodos(ps => ps.filter(todo => todo.id !== id))
    }

    const contextValue: TodosContextObject = {
        todos: [],
        addTodo: addTodoHandler,
        removeTodo: deleteHandler
    }

    return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>
}