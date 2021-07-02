import { Router } from 'express';
import * as emailController from './email.controller';

const routers = Router();

routers.post('/email', emailController.sendToContactsByListId);

export default routers;
