import app from './app';
import config from './config/config';
import logger from './utils/logger';
import dbConnectService from './services/dbConnectService';

const {PORT, SERVER_URL} = config;

const server = app.listen(PORT);

;(async() => {
    try {
        // Database connection
        const conn = await dbConnectService();
        logger.info('DB Coonection', {
            meta : conn.name
        });        

        logger.info(`Applicatin Started`, {
            meta: {
                PORT,
                SERVER_URL
            }
        })
        
    } catch (error) {
        // create log
        logger.error(`Applicatin error`, {
            meta: error
        });
        server.close((err) => {
            logger.error(`Server Close error`, {
                meta: err
            });
            // all application is terminated with this 
            process.exit(1);
        });
    }
})()