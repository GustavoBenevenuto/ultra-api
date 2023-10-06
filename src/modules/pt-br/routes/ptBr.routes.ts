import { Router } from 'express';
import { CpfController } from '../controllers/CpfController';

export const ptBrRouter = Router();

const cpfController = new CpfController()

ptBrRouter.get('/generate', cpfController.toGenerate);

ptBrRouter.get('/validate', cpfController.validate);