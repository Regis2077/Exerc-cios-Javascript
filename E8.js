/**Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

const repeat = (param1, param2) => {
    const arr = []
    for ( i = 0; i  < param2; i++){
        arr.push(param1)
    }
    return arr
}

console.log(repeat('VASCO', 10))