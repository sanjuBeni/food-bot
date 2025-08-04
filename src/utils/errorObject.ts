import { Request } from 'express';
import {HttpErrorType} from '../types/HttpResponseType'
import config from '../config/config';
import { ApplicatinEnvironmentEnum } from '../constant/application';
import responseMsg from '../constant/responseMsg';

export default (err: Error, req: Request, statusCode: number = 500) : HttpErrorType => {

    const errorObj : HttpErrorType = {
        success: false,
        statusCode,
        message: err instanceof Error ? err.message || responseMsg.SOMETHING_WENT_WRONG : responseMsg.SOMETHING_WENT_WRONG,
        data: null,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        trace: err instanceof Error ? {error: err.stack} : null 
    }

    // log file
    // console.error('some error', {
    //     meta: errorObj 
    // });

    if(config.ENV === ApplicatinEnvironmentEnum.PRODUCTION) {
        delete errorObj.request.ip;
        delete errorObj.trace;
    }

    return errorObj

}