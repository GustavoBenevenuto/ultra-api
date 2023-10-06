export interface IBaseGenerationValidation {
    toGenerate(withMask?: boolean): Promise<string> | string;
    validate(value: string): Promise<boolean> | boolean;
}