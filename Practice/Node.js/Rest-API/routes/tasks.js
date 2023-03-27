const { Router } = require('express');
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers');
const { validateBody, auth } = require('../middlewares');
const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
} = require('../utils/validation/taskValidation');

const router = Router();

router
  .route('/')
  .all(auth)
  .get(getTasks)
  .post(validateBody(createTaskValidationSchema), createTask);

router
  .route('/:taskId')
  .all(auth)
  .get(getTask)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(deleteTask);

module.exports = router;
