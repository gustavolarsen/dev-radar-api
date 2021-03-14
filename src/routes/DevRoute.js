import { Router } from 'express';

import devController from '../controllers/DevController.js';

const routes = Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);

export default routes;
