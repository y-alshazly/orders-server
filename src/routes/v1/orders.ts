import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.status(200).json({ message: 'Welcome to Typescript Node.js Server Setup Guide!!!' });
});

export default router;
