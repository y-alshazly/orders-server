import path from 'path';
import dotenv from 'dotenv';

import app from './app';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.development.local') });
}

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}/api`);
});
