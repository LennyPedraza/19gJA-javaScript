/**
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"]) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * .forEach()
 * .filter()
 * .reduce()
 *
*/

/*
let arrayElements = [1, 2, "a", "b"]
let aux = []
const filterArray = (arr) =>{
    arr.forEach((item) => {
        if (typeof item === "string"){
            aux.push(item)
        }     
    })

    return aux

}

console.log(filterArray(arrayElements))
console.log(aux)
*/

/*
let arrayElements = [1, 2, "a", "b"]

const filterArray = (arr) =>{

    let aux = arr.filter((cv, index) =>{
       
        if (typeof cv === "string"){
           return cv
        } 

    } )

    return aux
    
}


let resultado = filterArray(arrayElements)
console.log(filterArray(arrayElements))
console.log(resultado)
*/


let arrayElements = [1, 2, "a", "b"]

const filterArray = (arr) =>{

    let aux = arr.reduce((acc, cv) =>{
       
        if (typeof cv  === 'string'){

        }
})








            // let arrayElements = [1, 2, "a", "b"]

            // const filterArray = (arr) =>{
            
            //     let aux = arr.reduce((acc, cv) =>{
                   
            
            //         if (typeof cv === "string"){
            //             acc.push(cv)
            //            return acc
            //         } 
            
            //     }, [])
            
            //     return aux
                
            // }
            
            // console.log(filterArray(arrayElements))
              