import { NextFunction, Request, Response } from "express";
import httpResponse from "../utils/httpResponse";
import httpError from "../utils/httpError";
import responseMsg from "../constant/responseMsg";
import { getApplicationHelth, getSystemHealth } from "../utils/quicker";

const {SUCCESS} =responseMsg;

const appHealth = (req: Request, res: Response, next: NextFunction) => {

    try {
        const healtData = {
            system: getSystemHealth(),
            application: getApplicationHelth(),
            timeStamp: Date.now()
        }
        // throw new Error("Some error comming")
        httpResponse(req, res, 200, SUCCESS, healtData);
    } catch (error) {
        httpError(next, error, req);
    }
}

export {
    appHealth
}