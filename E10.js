/**Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array */

const array = arr =>{
    const firstEl = arr.shift() 
    const lastEl =  arr.pop()

    const firstAndLast = [firstEl, lastEl]
    return firstAndLast
}

console.log(array(['Mercedes', 'Red Bull', 'Willians', 'Hass', 'Ferrari']))