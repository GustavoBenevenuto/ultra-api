import dotenv from 'dotenv';
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './errors/AppError';
import cors from 'cors';
import { ZodError } from 'zod';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((erro: AppError | ZodError, request: Request, response: Response, next: NextFunction) => {
    if (erro instanceof AppError) {
        return response.status(erro.statusCode).json({
            status: 'Erro',
            message: erro.mensagem,
        });
    }

    if (erro instanceof ZodError) {
        return response.status(400).send({ mensagem: 'Error: Request data is incorrect', issues: erro.format() })
    }

    console.error({ erro });

    return response.status(500).json({
        status: 'Error',
        message: 'Internal server error',
    })
});

app.listen(process.env.PORT || 3333, () => {
    console.log(' ');
    console.log(' ---------------------------- ');
    console.log('| Run service...             |');
    console.log(' ---------------------------- ');
    console.log(' ');
});