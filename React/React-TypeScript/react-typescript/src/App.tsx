import {Todos} from "./components/Todos";
import {TodoClass} from "./types/todo";
import {NewTodo} from "./components/NewTodo";
import {useState} from "react";

export type deleteHandlerType = (id: number) => void

function App() {
    const [todos, setTodos] = useState<TodoClass[]>([])

    const AddTodoHandler = (todoText: string) => {
        setTodos(ps => ps.concat(new TodoClass(todoText)))
    }

    const deleteHandler = (id: number) => {
        setTodos(ps => ps.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <NewTodo onAddTodo={AddTodoHandler}/>
            <Todos todos={todos} handleDelete={deleteHandler}/>
        </div>
    );
}

export default App;
