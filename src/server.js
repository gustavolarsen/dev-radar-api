import express from 'express';

import devRoute from './routes/DevRoute.js';
import searchRoute from './routes/SearchRoute.js';
import conntectionDb from './utils/ConnectionDb.js';

const port = process.env.PORT || 3333;
const app = express();

conntectionDb();

app.use(express.json());

app.use(devRoute);
app.use(searchRoute);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
