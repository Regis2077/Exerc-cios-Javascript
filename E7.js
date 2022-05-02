/**Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

const multiply = (num1, num2) => {
    let soma = 0
    for ( i = 0; i  < num2; i++){
        soma = soma + num1
    }
    return soma
}
console.log(multiply(4, 10))
console.log(multiply(2, 12))
console.log(multiply(5, 3))
console.log(multiply(5, '3')) 
console.log(multiply('5', 3)) //wtf (???)


