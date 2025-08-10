import { NextFunction, Request } from 'express';
import errorObject from './errorObject';

export default (nextFunc: NextFunction, err: Error | string, req: Request, errorStatusCode: number = 500) : void => {
    const errorObj = errorObject(err, req, errorStatusCode);
    return nextFunc(errorObj);
}