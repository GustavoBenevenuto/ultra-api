import { Request, Response } from "express";
import { ParsedQs } from "qs";
import { IControllerBase } from "../../interfaces/IControllerBase";
import { z } from "zod";
import { stringToBoolean } from "../../../utils/stringToBoolean";
import { CnpjService } from "ultra-dev";

export class CnpjController implements IControllerBase {
    toGenerate(request: Request, response: Response): Response {
        const querySchema = z.object({
            withMask: z.string().optional()
        })
        const { withMask } = querySchema.parse(request.query)

        const value = CnpjService.toGenerate(stringToBoolean(withMask))

        return response.json({ value });
    }

    validate(request: Request, response: Response): Response {
        const querySchema = z.object({
            value: z.string()
        })
        const { value } = querySchema.parse(request.query)

        const isValid = CnpjService.validate(value)

        return response.json({ isValid });
    }
}