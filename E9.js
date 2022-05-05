/**Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro */

const more = repeat => {
    let simbol = ''
    for ( i = 0; i <repeat; i++){
      simbol += '+'  
    }
    return simbol
}

console.log(more(5))

//outra resolução 

const more2 = repeat =>{
    return Array(repeat).fill("+").join('')
}

console.log(more2(10))

//outra resulução 

const more3 = repeat => {
    return "-".repeat(repeat)
}

console.log(more3(6))
