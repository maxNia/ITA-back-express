import { NextFunction, Request, Response } from 'express';

export function errorHandler(e: Error, req: Request, res: Response, next: NextFunction) {
  const errorCodes: any = {
    SERVER_ERROR: '500',
    BAD_REQUEST: '400',
    NOT_FOUND: '404',
  };
  
  res.status(errorCodes[e.message]).send();
}
