import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricadrdo", 11122233309 );

const cliente2 = new Cliente("Alice",88822233309 );

// Forma antiga de criar o cliente informando nome e CPF sem constructor = const cliente2 = new Cliente();
//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;

const conta1 = new ContaCorrente(1001, cliente1);
//Forma , antes de usar o Constructor conta1.agencia = 1001;
//conta1.cliente = cliente1;
// forma antiga de infromar o saldo da conta - contaCorrenteRicardo._saldo = 0;
conta1.depositar(500);

const conta2 = new ContaCorrente (1002 , cliente2);

let valor = 200;
conta1.transferir(valor, conta2);


console.log("Valor:  ", valor)
console.log(conta1);
console.log(conta2);
console.log("Quantidade de contas corrente : ",ContaCorrente.numeroDeContas);






