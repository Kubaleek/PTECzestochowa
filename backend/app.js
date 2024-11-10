import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { securityService } from './utils/utills.js';
import postRouter from './src/routes/postRouter/postRouter.js';
import authRouter from './src/routes/authRouter/authRouter.js';
import emailRouter from './src/routes/emailRoute/emailRoute.js';
import courseRouter from './src/routes/courseRouter/courseRouter.js';
import { authorize } from './utils/middlewares.js';

const app = express();

// Configure CORS to allow requests from both production and development URLs
const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:3000'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Middleware setup
app.use(express.json());
app.use(securityService.limiter); // Rate limiting
app.use(helmet()); // Security headers
app.use(cookieParser()); // Parsing cookies

// Routes
// Protected routes
app.use('/backend/pte/coures',authorize, courseRouter); // Protected
app.use('/backend/',authorize, authRouter); // Protected
app.use('/backend/pte/contact',authorize, emailRouter); // Protected

// Open route
app.use('/backend/pte/posts', postRouter); // Currently open

// Global error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: err.status || "fail",
        message: err.message,
    });
});

export default app;
