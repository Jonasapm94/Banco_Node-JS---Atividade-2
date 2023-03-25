const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)


let p1 = new Pessoa('Jonas', 28, new Date(1994,8,29));
let pf = new PessoaFisica('Jonas A', 25, new Date(1994,8,29), '012345678901');
let pj = new PessoaJuridica('Jonas Enterprise', 3, new Date(2023, 2, 24), '001002003000140');

console.log(`Pessoa: Nome: ${p1.nome}, idade: ${p1.idade}, data de nascimento: ${p1.dataNascimento}`);
console.log(`Pessoa Física: Nome: ${pf.nome}, idade: ${pf.idade}, data de nascimento: ${pf.dataNascimento}, cpf: ${pf.cpf}`);
console.log(`Pessoa Jurídica: Nome: ${pj.nome}, idade: ${pj.idade}, data de nascimento: ${pj.dataNascimento}, cnpj: ${pj.cnpj}`);

