import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../middlewares/error';
import userRouters from '../user/user.routers';
import contactRouters from '../contact/contact.routers';

const app = express();

app.use(userRouters);
app.use(contactRouters);
app.use(errorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('Sorry cant find that!');
});

app.listen(3000);

