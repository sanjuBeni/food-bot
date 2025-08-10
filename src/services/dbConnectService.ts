import mongoose from "mongoose";
import config from "../config/config";
import logger from "../utils/logger";

const dbConnectService = async() => {
    try {
        await mongoose.connect(`${config.DATABASE_URL}/productioin_setup`);
        return mongoose.connection;
    } catch (error) {
        logger.info('Db Connection Error', {
            meta : error
        })
        process.exit(1);
    }
}

export default dbConnectService