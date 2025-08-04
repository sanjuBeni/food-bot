import {NextFunction, Request, Response } from 'express';
import httpResponse from '../utils/httpResponse';
import responseMsg from '../constant/responseMsg';
import httpError from '../utils/httpError';

const {SUCCESS} =responseMsg;

const getUsers= (req: Request, res: Response, next: NextFunction) => {

    try {
        // throw new Error("Some error comming")
        httpResponse(req, res, 200, SUCCESS);
    } catch (error) {
        httpError(next, error, req);
    }

} 

export {
    getUsers
}