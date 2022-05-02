/**Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ..." */

const inverse = value => {
    
    if(value == true) return false
    if(value == false) return true

    let negative  = value * -1
    let num =  new Number(value)
    if (value == num) return negative
    
    else if (value != num || Boolean)  return `Booleano ou número esperado, o parametro é do tipo ${typeof(value)}` 
}


console.log(inverse(5))
console.log(inverse(true))
console.log(inverse(false))
console.log(inverse('não número ou boolean'))


