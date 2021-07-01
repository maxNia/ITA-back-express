import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../middlewares/error';
import contactRouters from '../contact/contact.routers';
import listRouters from '../list/list.routers';
import bodyParser from 'body-parser';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(listRouters)
app.use(contactRouters);
app.use(errorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('Sorry cant find that!');
});

app.listen(3000);
