import mongoose from 'mongoose';
import { app } from './app';

const { PORT, DB_URL } = process.env;

(async () => {
  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(DB_URL as string);
    console.log('Database connect successfully established.');

    app.listen(PORT, () => {
      console.log(`The server is up and running on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.log(error);
  }
})();
