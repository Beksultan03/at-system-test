import { Request, Response, Router } from 'express';
import { getBalance } from './balance.controller';

const router = Router();

router.get('/balance', async (req: Request, res: Response) =>
  getBalance(req, res),
);

export default router;
