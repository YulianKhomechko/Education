import { RequestHandler } from 'express';
import { Todo } from '../models/todo.model';
import { generateId } from '../helpers/generateId';

const TODOS: Todo[] = [];

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json(TODOS);
};

export const addTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body;
  const id = generateId();
  const newTodo = new Todo(id, text);

  TODOS.push(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo: RequestHandler<{ todoId: string }, {}> = (req, res, next) => {
  const { todoId } = req.params;
  const { text } = req.body;
  const todo = TODOS.find((todo) => todo.id === todoId);
  if (!todo) {
    return res.status(404).json({ message: 'Not Found' });
  }
  todo.text = text;
  res.status(200).json(todo);
};

export const deleteTodo: RequestHandler<{ todoId: string }> = (req, res, next) => {
  const { todoId } = req.params;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Not Found' });
  }
  TODOS.splice(todoIndex, 1);
  res.status(204).end();
};
