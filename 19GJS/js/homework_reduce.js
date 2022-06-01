/**
 * Funcion que reciba una palabra
 * Retorne la palabra invertida
 *
 * reverseStr('hola mundo')
 * -> 'odnum aloh'
 * 
 * Usar solo metodos de str y array
 */

// const reversedStr = (str) =>{
//     let newStr= str.split('').reverse().join('') 
// return newStr
// }

// el codigo al tener  se puede reducir
// const reversedStr = str => {return str.split('').reverse().join('') }

/**
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 * 
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

// const average = (list) =>{

//     const sumList = list.reduce(function(value = 0,newElement))


// }






/**
 * Funcion que reciba un array de strings
 * y devuelva un array indicando si son palindromos o no
 * 
 * arePalindrome( ['oso','juan', 'seres'] )
 * -> [true, false, true]
 */


/**
 * Estudiar los métodos de array
 * .filter()
 * .reduce()
 */



/**
 * Tarea
 * REalizar los siguientes 3 ejercicios
 * 
 */

/**
 * 1. funcion con .reduce()
 * capitalizeNames( ['jorge','lUis', 'marcOs', 'mario'] )
 * -> ['Jorge','Luis', 'Marcos', 'Mario']
 */
//  let arr = ['jorge','lUis', 'marcOs', 'mario']


// const capitalizeNames = (arr) => {
//   let resultado = []

//     resultado = arr.reduce((acc, cv, currentIndex, array)=>
//     {
//       acc.push(`${cv[0].toUpperCase()}${cv.slice(1).toLowerCase()}`) 
//       return acc

//      },[])   
//      return resultado
// }
// console.log(capitalizeNames(arr))


/**
 * 2. funcion con .reduce()
 * Dado un array de numeros, filtras solo los pares
 * filterEvens( [2,3,4,5] )
 * -> [2,4]
 */

let numbers =[6]
const isEven = (numbers) =>{
  let filterEvens = numbers.reduce((acc,elemento) =>{
      if (elemento % 2 === 0 ){ 
         acc.push(elemento)
      return acc 
    
    } else 
      {
        return acc
      }
    } 
  ,[])

  return filterEvens
}
console.log(isEven(numbers))

/**
 * 3. funcion con .reduce()
 * Dado un array de numeros, obtener la suma de solo los elementos positivos
 * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
 * -> 42
 */

// let allNumbers = [ 1, -4, 12, 0, -3, 29, -150] 

// const sumPositives = (allNumbers) =>{
//   let addAllPositives  = allNumbers.reduce ((cv)=> {
//     if(cv > 0 ){
//       return cv
//     }  
//   },[])

// }

/**
 * 4. Estudiar Objetos y métodos de objetos
 *
 */


/**
 * Opcional
 * funcion con .reduce()
 * Dado un array de palabras, filtras las que son palindromos
 * onlyPalindrome( ['oso','pedro', 'jorge', 'seres'] )
 * -> ['oso','seres']
 */
