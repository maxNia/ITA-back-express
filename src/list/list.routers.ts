import { Router } from 'express';
import * as listController from './list.controller';

const routers = Router();

routers.post('/list', listController.createList);
routers.get('/list', listController.getLists);
routers.get('/list/:id', listController.getContactsByListId);
routers.patch('/list', listController.addContact);

export default routers;
