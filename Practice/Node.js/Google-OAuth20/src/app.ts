import path = require('path');
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { rootRouter } from './router/rootRouter';
import cookieSession from 'cookie-session';
import { extractEnvironmentVariable } from './utils/extractEnvironmentVariable';
import { passport } from './services/passport';
import { auth } from './middlewares/auth';
import { globalErrorHandler } from './middlewares/errorHandling/globalErrorHandler';
import { notFound } from './middlewares/errorHandling/notFound';

const app = express();

// set up view engine
app.set('view engine', 'ejs');

app.use(
  cookieSession({
    // in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    // keys will be used for encryption
    keys: [extractEnvironmentVariable('COOKIE_KEY')],
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Authorization
app.use(auth);

// Router
app.use('/', rootRouter);

// Handling wrong route
app.use(notFound);
// Global error handler
app.use(globalErrorHandler);

export { app };
