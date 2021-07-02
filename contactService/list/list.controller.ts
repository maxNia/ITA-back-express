import { NextFunction, Request, Response } from 'express';
import * as listService from './list.services';

export function createList(req: Request, res: Response, next: NextFunction) {
  try {
    listService.createList(req.body);
    res.status(201).send('Created');
  } catch (e) {
    next(e);
  }
} 

export async function getLists(req: Request, res: Response, next: NextFunction) {
  try {
    const lists = await listService.getLists();
    res.status(200).send(lists);
  } catch(e) {
    next(e);
  }
}

export async function getContactsByListId(req: Request, res: Response, next: NextFunction) {
  try {
    const contacts = await listService.getContactsByListId(req.params.id);
    res.status(200).send(contacts);
  } catch(e) {
    next(e);
  }
}

export async function addContact(req: Request, res: Response, next: NextFunction) {
  try {
    const contacts = await listService.addContact(req.body);
    res.status(200).send(contacts);
  } catch(e) {
    next(e);
  }
}