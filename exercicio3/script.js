console.log("Just checking")
//-------------LOOPS Exercicio 3---------------//
/*
# Exercício 3
Crie um array com 5 strings. 
Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
```
*/

const arrayDeStrings = ()=>{
    let maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
    let rank = 1;
    for(let indice = 0; indice <= maioresPaises.length -1; indice++) {     
        
        console.log(`${indice+rank} - ${maioresPaises[indice]}`);
    }
}
arrayDeStrings()
//ASK: why (if I remove -1) it prints a 6th value of undefined???