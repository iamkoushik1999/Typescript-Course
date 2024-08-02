import express from 'express';
import 'dotenv/config';
import compression from 'compression';
// DATABASE
import connectDB from './config/database';
connectDB();
// Error Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware';
// Import Routes
import teacherRoutes from './routes/teacherRoutes';
import courseRoutes from './routes/courseRoutes';

// APP
const app = express();

// MIDDLEWARES
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/teacher', teacherRoutes);
app.use('/api/v1/course', courseRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
