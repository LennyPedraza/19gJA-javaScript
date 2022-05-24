// Ejercicios

/**
 * Ejercicio 1
 * Escribir un programa que arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 */


// let i = 1
// let a = 0
// let b = 0
// let c = 0
//  metodo for
// for(let i = 1 ; i <= 100 ; i++){
//     if(i % 3 === 0){
//         a += i  
//     }
//     if(i % 5 === 0){
      
//         b += i  
//     }
//     if(i % 7 === 0){
      
//         c += i      
//     }    
// }
// console.log(`La suma de los multiplos del 3 es: ${a}`)
// console.log(`La suma de los multiplos del 5 es: ${b}`)
// console.log(`La suma de los multiplos del 7 es: ${c}`)
// console.log(`La suma de los multiplos del 3, 5 y 7 es: ${a+b+c}`)

//metodo while
//  while( i <= 100){
//     if(i % 3 === 0)
//     { a += i}
//      else if(i % 5 === 0)
//     { b += i}
//      else if(i % 7 === 0)
//     {c += i}
//     i++ 
//     }
// console.log(`La suma de los multiplos del 3 es: ${a}`)
// console.log(`La suma de los multiplos del 5 es: ${b}`)
// console.log(`La suma de los multiplos del 7 es: ${c}`)
// console.log(`La suma de los multiplos del 3, 5 y 7 es: ${a+b+c}`)



/**
 * Ejercicio 2
 * Pedir el usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 */

// let num = prompt('ingresa un digito del 1 al 100')
// let i  = 1
// let aux = 0

// do{
//     if(num <= 100)
//     {aux +=i}
//     else{
//         console.log('digito invalido')
//         }
//     i++
// }while(i <= num)
// alert(aux)





/**
 * Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 * 
 * p.ej. 'hola kodErs'
 * ->  A -> 1 
 * ->  E -> 1
 * ->  Espacios -> 1 
 */
 let str = prompt('Escriba una oración')
 let newStr = str.toLowerCase 

 for(let i = 0 ; i <= newStr.length; i++ ) {
     

 }

/**
 * Ejercicio 4
 * Estudiar acerca del tema Funciones
 * ¿Qué son?
 * Parametros y argumentos de una funcion
 * Parametros de una funcion
 * Parametros opcionales
 * Parametros por defecto (default)
 * 
 * Referencias
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://www.programiz.com/javascript/function
 * 
 */



