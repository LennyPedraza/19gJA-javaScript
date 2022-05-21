// Ejercicio 1
// investigar while, y do while


// Utilizar Condicionales, Ciclo for, Metodos de string

/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */


// let number = parseInt(prompt('Digita un numero del 1 al 10'))
// for(let i = 1; i <= 10; i++ )
// { 
//     if(number<=10){
//         let result = number*i
//     console.log(number +'*'+ i +'='+result )
//     } else{
//         console.log('Solo puedes colocar un numero del 1 al 10')
//     }   
// }
 
/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */

// let str = prompt('Ingresa una oración')
// let fin = str.length

// // for(let i = 0; i< fin; i++){
// //     let caracter = str[i]
// //     // console.log(caracter)
// //  if(
// //         caracter !== 'a' && 
// //         caracter !== 'e' && 
// //         caracter !== 'i' && 
// //         caracter !== 'o' && 
// //         caracter !== 'u' &&
// //         caracter !== ' ' 
// //     ){
// //         console.log(caracter)
// //     }
// // } 

// for(let i = 0; i< fin; i++){
//     let caracter = str[i]   
//     // console.log(caracter)
//  if(
//         caracter == 'a' ||
//         caracter == 'e' || 
//         caracter == 'i' || 
//         caracter == 'o' || 
//         caracter == 'u' 
//     ){
//         console.log(caracter)
//     }
// } 


/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * 
 */
let number = parseInt(prompt('Digita un numero del 1 al 100'))


for (let i=0; i <= number ; i++){
    if (number > 100) {
        console.log('Numero invalido, solo puedes colocar un numero del 1 al 100')
    }
    if(number%2 === 0) {
        console.log ()
    }

}



/**
 * 
 * Ejercicio 5. Opcional
 * Pedir el usuario una palabra
 * Invertir esa palabra e imprimirla en consola
 * p.ej. 'Hola' -> 'aloh'
 *
 */