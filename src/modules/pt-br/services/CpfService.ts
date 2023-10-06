import { IGenerationValidation } from "../../interfaces/IGenerationValidation";

/** Brazilian CPF generation and validation service */
export class CpfService implements IGenerationValidation {
    toGenerate(withMask: boolean): string {
        let cpf = '';
        for (let i = 0; i < 9; i++) {
            cpf += Math.floor(Math.random() * 10);
        }
        cpf += this.calculateCheckDigit(cpf);
        cpf += this.calculateCheckDigit(cpf);

        return withMask ? cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : cpf;
    }

    validate(value: string): boolean {
        value = value.replace(/\D/g, '');
        if (value.length !== 11) return false;

        const checkDigit1 = this.calculateCheckDigit(value.substring(0, 9));
        const checkDigit2 = this.calculateCheckDigit(value.substring(0, 10));

        return checkDigit1 === Number(value[9]) && checkDigit2 === Number(value[10]);
    }

    private calculateCheckDigit(partialCpf: string): number {
        let sum = 0;
        for (let i = 0; i < partialCpf.length; i++) {
            sum += Number(partialCpf[i]) * (partialCpf.length + 1 - i);
        }
        const rest = sum % 11;
        return rest < 2 ? 0 : 11 - rest;
    }
}