import { Router } from 'express';
import { CpfController } from '../controllers/CpfController';

export const cnpjRouter = Router();

const cnpjController = new CpfController()

cnpjRouter.get('/generate', cnpjController.toGenerate);

cnpjRouter.get('/validate', cnpjController.validate);