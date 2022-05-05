/*
*Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro */

    let haas =  {
        Nome: 'Haas Team',
        piloto: 'Nikita Mazepim',
        categoria: "formula 1"
    }

    let redBull =  {
        Nome: 'Oracle Red Bull',
        piloto: 'Max Verstappen',
        categoria: "formula 1"
    }

    
    const removeProp = (objName, prop) => {
        const copia = Object.assign({}, objName)

         delete copia[prop]
         return copia
    }
    
console.log(removeProp(haas, piloto))