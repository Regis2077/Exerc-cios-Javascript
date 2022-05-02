/**Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

const month = index =>{
    
    const months = ["Invalid Month","January", "Ferbuary", "March", "April", "may", "June", "July", "August", "September", "October", "November", "December"]
    
    return months[index]
}

console.log(month(1))
console.log(month(2))
console.log(month(12))
