import { Router } from 'express';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todosControllers';

const router = Router();

router.get('/', getTodos);

router.post('/', addTodo);

router.patch('/:todoId', updateTodo);

router.delete('/:todoId', deleteTodo);

export { router as todoRouter };
