import { Router } from 'express';
import { palindromeRouter } from './palindrome.routes';

export const generalRouter = Router();

generalRouter.use('/palindrome', palindromeRouter);