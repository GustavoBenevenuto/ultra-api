import { Router } from 'express';
import { ptBrRouter } from '../modules/brazil/routes/ptBr.routes';
import { generalRouter } from '../modules/general/routes/general.routes';

const routes = Router();

routes.use('/brazil', ptBrRouter);

routes.use('/general', generalRouter);

routes.use('/', (request, response) => {
    return response.json({});
});

export default routes;