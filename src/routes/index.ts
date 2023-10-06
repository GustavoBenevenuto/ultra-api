import { Router } from 'express';
import { ptBrRouter } from '../modules/pt-br/routes/ptBr.routes';

const routes = Router();

routes.use('/pt-br', ptBrRouter);

routes.use('/', (request, response) => {
    return response.json({});
});

export default routes;