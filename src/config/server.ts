import express from 'express';
import { errorHandler } from '../middlewares/error';
import routes from '../user/user.routers';

const app = express();

app.use(routes);
app.use(errorHandler);

app.listen(3000);