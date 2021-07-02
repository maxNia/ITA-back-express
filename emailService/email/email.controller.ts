import * as emailService from './email.services';
import { Request, Response, NextFunction } from 'express';

export async function sendToContactsByListId(req: Request, res: Response, next: NextFunction) {
  try {
    await emailService.sendToContactsByListId(req.body);
    res.status(200).send('email sent');
  } catch(e) {
    next(e);
  }
}
