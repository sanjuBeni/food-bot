import { Request, Response } from 'express';
import {HttpResponseType} from '../types/HttpResponseType';
import { ApplicatinEnvironmentEnum } from '../constant/application';
import config from '../config/config';


export default (req: Request, res: Response, statusCode: number, message: string, data: unknown = null) : void => {
 
    const response : HttpResponseType = {
        success: true,
        statusCode,
        message,
        data,
        request : {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        }
    }

    // Log file create todo--
    // console.info('controller response', {
    //     meta : response
    // })

    // Production Env Check
    if(config.ENV === ApplicatinEnvironmentEnum.PRODUCTION) {
        delete response.request.ip;
    }


    res.status(statusCode).json(response);
}
