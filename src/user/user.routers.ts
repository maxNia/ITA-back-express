import { Request, Response, NextFunction, Router } from 'express';
import * as userController from './user.controllers';

const routes = Router();

routes.post('/addUser', userController.createUser);
routes.get('/getUser', userController.getUser);
routes.put('/updateUser', userController.updateUser);
routes.delete('/deleteUser', userController.deleteUser);

routes.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('Sorry cant find that!');
});

export default routes;
