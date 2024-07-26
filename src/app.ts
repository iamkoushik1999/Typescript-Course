import express from 'express';
import 'dotenv/config';
import compression from 'compression';
// DATABASE
import connectDB from './config/database';
connectDB();
// Error Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware';

// APP
const app = express();

// MIDDLEWARES
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
