import { Router } from 'express';
import * as contactController from './contact.controller';

const routers = Router();

routers.post('/contact', contactController.createContact);
routers.get('/contact', contactController.getContacts);

export default routers;
