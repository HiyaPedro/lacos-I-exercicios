console.log("Just checking")
//-------Loops Exercicios 1----------//
/*
# Exercício 1
Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. 

“S” deve representar “sim”, e “N” deve representar “não”. 

Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.
*/

const coxinhas = ()=>{
    let desejaCoxinha = prompt("Se você deseja comer mais coxinhas insirir \"S\" para representar sim ou \"N\" para reprsentar não!").toUpperCase();
    let conta = 0
    const custa = 2.50

    while(desejaCoxinha === 'S') {
        conta = conta+custa;
        desejaCoxinha = prompt("Se você deseja comer mais coxinhas insirir \"S\" para representar Sim ou \"N\" para representar Não!").toUpperCase();
    } 
console.log(conta);
}
coxinhas()