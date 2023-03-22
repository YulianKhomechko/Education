import React, { PropsWithChildren, useState } from 'react';
import { TodoList } from './components/TodoList';
import { NewTodo } from './components/NewTodo';
import { ITodo } from './todo.model';

const DUMMY_TODOS: ITodo[] = [{ id: 't0', text: 'finish the course' }];

export const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(DUMMY_TODOS);

  const todoAddHandler = (text: string) => {
    const newTodo = { id: `t${todos.length}`, text: text };

    setTodos((ps) => [...ps, newTodo]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((ps) => ps.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList
        onDeleteTodo={todoDeleteHandler}
        todos={todos}
      />
    </div>
  );
};

interface IFuncDeclarationProps extends PropsWithChildren {
  prop1: string;
}

// Typing function declaration
function AppF(props: IFuncDeclarationProps): React.ReactNode {
  return <div className="App"></div>;
}
