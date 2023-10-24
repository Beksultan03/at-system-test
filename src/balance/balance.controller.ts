import { Request, Response } from 'express';
import { logger } from '../common/logger/logger.service';
import { fetchBalance } from './balance.service';

export async function getBalance(req: Request, res: Response) {
  try {
    const balance = await fetchBalance();

    res.status(200).json(balance);
  } catch (error) {
    logger.error(error);

    res.status(500).json({ message: error.message, code: error?.code });
  }
}
