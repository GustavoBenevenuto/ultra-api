import { Router } from 'express';
import { CpfController } from '../controllers/CpfController';

export const cpfRouter = Router();

const cpfController = new CpfController()

cpfRouter.get('/generate', cpfController.toGenerate);

cpfRouter.get('/validate', cpfController.validate);