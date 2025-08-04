import app from './app';
import config from './config/config';

const {PORT} = config;
// SERVER_URL


// const server = 
app.listen(PORT);

;(() => {
    // try {
    //     // Database connection
    //     // console.info(`Applicatin Started`, {
    //     //     meta: {
    //     //         PORT,
    //     //         SERVER_URL
    //     //     }
    //     // })
        
    // } catch (error) {
    //     // create log
    //     error;
    //     // console.error(`Applicatin error`, {
    //     //     meta: error
    //     // });

    //     // (err)
    //     server.close(() => {
    //         // console.error(`Server Close error`, {
    //         //     meta: err
    //         // });
    //         // all application is terminated with this 
    //         process.exit(1);
    //     });
    // }
})()