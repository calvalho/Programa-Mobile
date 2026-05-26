const input = require('readline-sync');

let idade = 17;
let nota = 8.5;
let letra = 'A';
let nome = "Ana";


let placar = 0;
placar = 10; 
placar++;

let a = 10;
let b = 3;
console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b);

let n1 = Number(input.question("Digite o primeiro numero: "));
let n2 = Number(input.question("Digite o segundo numero: "));

console.log(`Soma: ${n1 + n2}`);
console.log(`Subtracao: ${n1 - n2}`);
console.log(`Multiplicacao: ${n1 * n2}`);

if (n2 === 0) {
    console.log("Erro: divisao por zero.");
} else {
    console.log(`Divisao: ${n1 / n2}`);
}

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(input.question(`Digite a nota ${i}: `));
    soma += nota;
}

let media = soma / 5;

console.log(`Media: ${media}`);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperacao");
} else {
    console.log("Reprovado");
}


const input = require('readline-sync');

let numero = Number(input.question("Digite um numero: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

const input = require('readline-sync');

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(input.question(`Digite o numero ${i}: `));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de pares: ${pares}`);
console.log(`Quantidade de impares: ${impares}`);

const prompt = require("prompt-sync")();

const secreto = 42;
let tentativa;
let contador = 0;

while (true) {
    tentativa = Number(prompt("Digite um número: "));
    
    contador++;

    if (tentativa === secreto) {
        console.log(`Parabéns! Você acertou em ${contador} tentativas.`);
        break;
    } 
    
    if (tentativa < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }
const prompt = require("prompt-sync")();

const secreto = 42;
let tentativa;
let contador = 0;

while (true) {
    tentativa = Number(prompt("Digite um número: "));
    
    contador++;

    if (tentativa === secreto) {
        console.log(`Parabéns! Você acertou em ${contador} tentativas.`);
        break;
    } 
    
    if (tentativa < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }

const prompt = require("prompt-sync")();

const secreto = 42;
let tentativa;
let contador = 0;

while (true) {
    tentativa = Number(prompt("Digite um número: "));
    
    contador++;

    if (tentativa === secreto) {
        console.log(`Parabéns! Você acertou em ${contador} tentativas.`);
        break;
    } 
    
    if (tentativa < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }

const prompt = require("prompt-sync")();

const secreto = 42;
let tentativa;
let contador = 0;

while (true) {
    tentativa = Number(prompt("Digite um número: "));
    
    contador++;

    if (tentativa === secreto) {
        console.log(`Parabéns! Você acertou em ${contador} tentativas.`);
        break;
    } 
    
    if (tentativa < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }










