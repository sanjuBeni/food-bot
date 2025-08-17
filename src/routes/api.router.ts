import {Router} from 'express';
import { appHealth } from '../controllers/apiController';


const apiRoutes = Router();

apiRoutes.route('/health').get(appHealth);


export default apiRoutes;