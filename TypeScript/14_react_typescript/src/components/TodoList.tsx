import React from 'react';
import { NewTodo } from './NewTodo';
import { ITodo } from '../todo.model';

import './TodoList.css';

interface ITodoListProps {
  todos: ITodo[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span> {todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};
