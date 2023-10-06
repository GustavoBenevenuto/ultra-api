export interface IBase {
    toGenerate(withMask: boolean): Promise<string> | string;
    validate(value: string): Promise<boolean> | boolean;
}