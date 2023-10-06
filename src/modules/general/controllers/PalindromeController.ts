import { Request, Response } from "express";
import { IControllerBase } from "../../interfaces/IControllerBase";
import { z } from "zod";
import { PalindromeService } from "../services/PalindromeService";
import { stringToBoolean } from "../../../utils/stringToBoolean";

export class PalindromeController implements IControllerBase {
    toGenerate(request: Request, response: Response): Response {
        const querySchema = z.object({
            withMask: z.string().optional()
        })
        const { withMask } = querySchema.parse(request.query)

        const palindromeService = new PalindromeService()

        const value = palindromeService.toGenerate(stringToBoolean(withMask))

        return response.json({ value });
    }

    validate(request: Request, response: Response): Response {
        const querySchema = z.object({
            value: z.string()
        })
        const { value } = querySchema.parse(request.query)

        const palindromeService = new PalindromeService()

        const isValid = palindromeService.validate(value)

        return response.json({ isValid });
    }
}