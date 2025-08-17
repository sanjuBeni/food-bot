import { NextFunction, Request, Response } from "express";
// import config from "../config/config";
// import { ApplicatinEnvironmentEnum } from "../constant/application";
import { rateLimiterMongo } from "../config/rateLimiter";
import httpError from "../utils/httpError";
import responseMsg from "../constant/responseMsg";

export default (req: Request,_: Response, next: NextFunction) => {
    // if(config.ENV === ApplicatinEnvironmentEnum.DEVELOPMENT) {
    //     return next();
    // }

    if(rateLimiterMongo) {
        rateLimiterMongo.consume(req.ip as string, 1)
        .then(() => next())
        .catch(() => httpError(next, new Error(responseMsg.TOMANYREQUEST), req, 429)) 
    }

}