import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import orders from './routes/v1/orders';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json());
app.use('/api/v1/orders', orders);

export default app;
