import * as userServices from './user.services';
import { Request, Response, NextFunction } from 'express';

export function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    userServices.createUser('123');
    res.status(201).send('okay');
  } catch (e) {
    next(e);
  }
}

export function getUser(req: Request, res: Response, next: NextFunction) {
  try {    
    const result: string = userServices.getUser();
    if (!result) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(result);
  } catch (e) {
    next(e);
  }
}

export function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    userServices.updateUser('nst@gmail.com');
    res.status(200).send();
  } catch(e) {
    next(e);  
  }
  
}

export function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    userServices.deleteUser();
    res.status(200).send('user deleted');
  } catch (e) {
    next(e);
  }
}