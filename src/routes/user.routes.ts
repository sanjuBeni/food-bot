import {Router} from 'express';
import { getUsers } from '../controllers/userController';
import rateLimiterMiddleware from '../middlewares/rateLimiterMiddleware';


const userRouters = Router();

userRouters.use(rateLimiterMiddleware);
userRouters.route('/user').get(getUsers); 


export default userRouters;