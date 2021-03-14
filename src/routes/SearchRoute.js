import { Router } from 'express';

import searchController from '../controllers/SearchController.js';

const routes = Router();

routes.get('/search', searchController.index);

export default routes;
