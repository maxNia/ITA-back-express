import { NextFunction, Request, Response } from 'express';
import * as contactService from './contact.services';

export function create(req: Request, res: Response, next: NextFunction) {
  try {
    contactService.addContact(req.body);
    res.status(201).send('Created');
  } catch(e: any) {
    next(e);
  }
}

export function update(req: Request, res: Response, next: NextFunction) {
  try {
    contactService.updateContactById(req.body, req.params.id);
    res.status(200).send('Updated');
  } catch(e: any) {
    next(e);
  }
}