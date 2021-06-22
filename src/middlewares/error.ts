import { NextFunction, Request, Response } from "express";

export function errorHandler(e: Error, req: Request, res: Response, next: NextFunction) {
  switch (e.message) {
    case 'SERVER_ERROR':
      res.status(500).send();
      break;
    case 'BAD_REQUEST':
      res.status(400).send();
      break;
  }
}