import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser';

import { securityService } from './utils/utills.js';
import postRouter from './src/routes/postRouter/postRouter.js';
import authRouter from './src/routes/authRouter/authRouter.js';
import emailRouter from './src/routes/emailRoute/emailRoute.js';
import courseRouter from './src/routes/courseRouter/courseRouter.js';
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true,
}))
app.use(express.json());
app.use(securityService.limiter)
app.use(helmet())                                                                                  
app.use(cookieParser())                                                                                  
// Routery                                                                                  

app.use('/backend/pte/coures', courseRouter);
app.use('/backend/', authRouter);
app.use('/backend/pte/contact',emailRouter);
app.use('/backend/pte/posts',postRouter);                                                 
app.use((err, req, res, next) => {                                                                                  
    err.status = err.status || "fail";                                                                                  
    err.statusCode = err.statusCode || 500;                                                                                  
    res.status(err.statusCode).json({                                                                                  
      status: err.status,                                                                                  
      message: err.message,                                                                                  
    });                                                                                  
  });                                                                                  

  export default app;
