import { Request, Response } from "express"

export interface IControllerBase {
    toGenerate(request: Request, response: Response): Promise<Response> | Response
    validate(request: Request, response: Response): Promise<Response> | Response
}