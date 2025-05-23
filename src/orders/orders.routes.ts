import { Router } from 'express';

import { ordersService } from './orders.service';

const router = Router();

router.post('/', (req, res) => {
  try {
    if (!req.body || !Array.isArray(req.body.items) || req.body.items.length === 0) {
      throw new Error('Order must include at least one item.');
    }

    for (const item of req.body.items) {
      if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
        throw new Error('Each item must have a valid name.');
      }

      if (typeof item.price !== 'number' || item.price <= 0) {
        throw new Error('Each item must have a valid price greater than 0.');
      }
    }

    const order = ordersService(req.body);

    res.status(201).json(order);
  } catch (error) {
    const typedError = error as { message: string };

    res.status(400).send({ name: 'client-error', message: typedError.message });
  }
});

export default router;
