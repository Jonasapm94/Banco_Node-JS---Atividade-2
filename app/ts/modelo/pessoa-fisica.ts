class PessoaFisica extends Pessoa{
    private _cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string){
        const sufFisica = nome + ' - Física';
        super(sufFisica,idade,dataNascimento);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }
}