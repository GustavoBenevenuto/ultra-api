import { Router } from 'express';
import { ptBrRouter } from '../modules/pt-br/routes/ptBr.routes';
import { generalRouter } from '../modules/general/routes/general.routes';

const routes = Router();

routes.use('/pt-br', ptBrRouter);

routes.use('/general', generalRouter);

routes.use('/', (request, response) => {
    return response.json({});
});

export default routes;