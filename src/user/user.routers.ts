import { Router } from "express";
import * as userController from './user.controllers';

const routes = Router();

routes.post('/addUser', userController.createUser);
routes.get('/getUser', userController.getUser);
routes.put('/updateUser', userController.updateUser);
routes.delete('/deleteUser', userController.deleteUser);

routes.all('*', (req: any, res: any) => {
  res.sendStatus(400)
});

export default routes;
