import { Connection } from "mongoose";
import { RateLimiterMongo } from "rate-limiter-flexible";

export let rateLimiterMongo: null | RateLimiterMongo = null;

const points= 10;
const duration= 60;

export const initRateLimiter = (mongoConnection: Connection ) => {
    rateLimiterMongo= new RateLimiterMongo({
        storeClient: mongoConnection,
        points, // number of request
        duration
    });
}