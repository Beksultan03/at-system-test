import { Request, Response } from 'express';
import { storeSession } from './auth.service';
import { logger } from '../common/logger/logger.service';
import { SessionCred } from './interfaces/session.cred';

export async function login(
  req: Request<any, any, SessionCred>,
  res: Response,
) {
  try {
    await storeSession(req.body);

    res.status(200).json({ message: 'Session successfully stored' });
  } catch (error) {
    logger.error(error);

    res.status(401).json({ error: 'Authorization failed' });
  }
}
