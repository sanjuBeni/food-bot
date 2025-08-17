import express, {Application, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import path from 'path';
import userRouters from './routes/user.routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import responseMsg from './constant/responseMsg';
import httpError from './utils/httpError';
import apiRoutes from './routes/api.router';
import helmet from 'helmet';

const app: Application = express();

// Express Middleware

app.use(helmet());
// With this help of Cors we can access the diff-2 PORT request 
app.use(cors({
    // origin: [process.env.CORS_ORIGIN],
    // method: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
}));

//Express json middleware used for get JSON data from Client Side
app.use(express.json({
    limit: '35kb'
}));

// It's is handle the query string data and formData
app.use(express.urlencoded({
    extended: true,
    limit: '25kb'
}))

// Hanlde the public folder
app.use(express.static(path.join(__dirname, '../', 'public')));


app.use('/api/v1', apiRoutes);

app.use('/api/v1', userRouters);

// 404 Handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMsg.NOTFOUND('API'));        
    } catch (error) {
        httpError(next, error, req, 404);
    }
})

// Global Error Handler
app.use(globalErrorHandler);

export default app;