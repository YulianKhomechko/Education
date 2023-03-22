import React, { useRef } from 'react';

import './NewTodo.css';

interface INewTodoProps {
  onAddTodo: (text: string) => void;
}

export const NewTodo: React.FC<INewTodoProps> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (!enteredText.trim().length) {
      return;
    }

    onAddTodo(enteredText);
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">TODO Text:</label>
        <input
          ref={inputRef}
          type="text"
          id="todo-text"
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
