import { NextFunction, Request, Response } from 'express';
import * as contactService from './contact.services';

export function createContact(req: Request, res: Response, next: NextFunction) {
  try {
    contactService.createContact(req.body);
    res.status(201).send('Created');
  } catch(e: any) {
    next(e);
  }
}

export async function getContacts(req: Request, res: Response, next: NextFunction) {
  try {
    const contacts = await contactService.getContacts();
    res.status(200).send(contacts)
  } catch(e: any) {
    next(e);
  }
}
