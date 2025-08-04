import {Router} from 'express';
import { getUsers } from '../controllers/userController';


const userRouters = Router();

userRouters.route('/user').get(getUsers);


export default userRouters;