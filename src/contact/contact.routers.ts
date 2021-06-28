import { Router } from 'express';
import * as contactController from './contact.controller';

const routers = Router();

routers.post('/contact', contactController.create);
routers.patch('/contact/:id', contactController.update);

export default routers;
