/**
 * Ejercicio 1 *Obligatorio
 * Realizar una funcion que reciba como parametro 1 array
 * Y devuelva un array con solo los elementos Pares de ese array
 * p.ej.
 * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
 * -> evenOnly( [10, 2, 5] ) -> [10,2]
 * -> evenOnly() -> 'Se necesita un array'
 * 
 */
const isEven = () => {
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
let arrayEven= []
for(i= 0; i>= array.length; i++){
    if (array[i] % 2 === 0 ) {
        arrayEven.push(array[i])
        console.log(isEven)
    } 
}
}

/**
 * Ejercicio 2 *Opcional
 * Funcion que reciba como parametro una array de strings
 * y devuelva el primer y ultimo caracter de cada string
 * p.ej.
 * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
 */


/**
 * Ejercicio 3
 * Estudiar todos los métodos de Array
 * https://www.w3schools.com/jsref/jsref_obj_array.asp
 * https://www.programiz.com/javascript/library/array
 * 
 */
// concat()
// const array1 = ["tacos", "hamburgesa"]
// const array2 = ["soda", "cerveza", "agua"]

// const arrayConcat = array1.concat(array2)

// console.log(arrayConcat)

// // constructor Property: returns that created  the Array portotype
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text)


// copyWithin

const numeros = [1,2,3,4,5,6,7]

// console.log(numeros)

numeros.copyWithin (3,2)

// console.log(numeros)

numeros.copyWithin(2,3,5)

console.log(numeros)


// entries()

// const refrescos = ['coca-cola','jarritos',]

// const refrescos2 = refrescos.entries()

// console.log(refrescos2.next().value)
// console.log(refrescos2.next().value)






