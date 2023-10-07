import { Request, Response } from "express";
import { IControllerBase } from "../../interfaces/IControllerBase";
import { z } from "zod";
import { PalindromeService } from 'ultra-dev';

export class PalindromeController implements IControllerBase {
    toGenerate(request: Request, response: Response): Response {
        const value = PalindromeService.toGenerate()

        return response.json({ value });
    }

    validate(request: Request, response: Response): Response {
        const querySchema = z.object({
            value: z.string()
        })
        const { value } = querySchema.parse(request.query)

        const isValid = PalindromeService.validate(value)

        return response.json({ isValid });
    }
}