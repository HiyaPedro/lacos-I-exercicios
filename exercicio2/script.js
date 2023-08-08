console.log("Just checking")
//---------LOOPS exercicio 2-------------//
/*
# Exercício 2
Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada **`7`**:

7
14
21
28
35
42
49
56
63
70
*/

const numero = ()=> {
    const pecaNum = +prompt("Escreva um numero");
    for(let i = 0; i <= 10; i++) {
        let multiplica = pecaNum * i;
        console.log(`Number: ${multiplica}`)
    }
}
numero()