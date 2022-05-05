/**Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

const repeat = (item, qntd) => {
    const arr = []
    for ( i = 0; i  < qntd; i++){
        arr.push(item)
    }
    return arr
}
console.log(repeat('VASCO', 10))
console.log(repeat(12, 5))

//outra resolução 
const repeat2 = (item, qntd) => {
    return Array(qntd).fill(item)
}


console.log(repeat2('yoda', 10))
console.log(repeat2(12, 5))