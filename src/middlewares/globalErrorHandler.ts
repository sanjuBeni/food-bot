import { Request, Response } from 'express';
import { HttpErrorType } from '../types/HttpResponseType';

export default (err: HttpErrorType, _: Request, res: Response) => {
    const statusCode =  typeof err.statusCode === 'number' ? err.statusCode : 500;
    
    res.status(statusCode).json(err);
}