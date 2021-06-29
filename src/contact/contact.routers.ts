import { Router } from 'express';
import * as contactController from './contact.controller';

const routers = Router();

routers.post('/contact', contactController.create);
routers.get('/contact', contactController.getAll);
routers.patch('/contact/:id', contactController.update);

export default routers;
