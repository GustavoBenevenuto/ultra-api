import { Router } from 'express';
import { PalindromeController } from '../controllers/PalindromeController';

export const palindromeRouter = Router();

const palindromeController = new PalindromeController()

palindromeRouter.get('/generate', palindromeController.toGenerate);

palindromeRouter.get('/validate', palindromeController.validate);