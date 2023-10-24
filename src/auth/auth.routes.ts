import { Request, Response, Router } from 'express';
import { sessionSchema } from './validation/session.schema';
import { login } from './auth.controller';

const router = Router();

router.post('/auth', async (req: Request, res: Response) => {
  const { error } = sessionSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  await login(req, res);
});

export default router;
