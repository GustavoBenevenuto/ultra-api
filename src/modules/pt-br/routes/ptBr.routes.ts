import { Router } from 'express';
import { cpfRouter } from './cpf.routes';
import { cnpjRouter } from './cnpj.routes';

export const ptBrRouter = Router();

ptBrRouter.use('/cpf', cpfRouter);

ptBrRouter.use('/cnpj', cnpjRouter);