import express from 'express';
import { todoRouter } from './routes/todoRouter';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
// app.use(bodyParser());

app.use('/todos', todoRouter);

app.use(errorHandlerMiddleware);

app.listen(3000, () => {
  console.log(`Server is up and running on port 3000...`);
});
