//  1.- declaracion de variables e invocacion de funciones
// 2.- Funciones con parametros
// 3- Funciones con parametros opcionales o variables por defecto
// funciones con retorno

// function retorno (a,b){
//     if(a>b){
//         return a
//     } else {
//         return b
//     }
// }
// a>b ? a : b

// arrow functions -> funciones flecha
//sintaxys u
//  function suma (a,b){
//      //Sentencias
//  }
//declaracion 

// const suma (a ,b ) => {
//     //sentencias
// }

// const suma (a ,b ) => {
//     //sentencias
//     return a + b
// }

// const suma (a) => {
//     //sentencias
//     return a + b
// }

// const suma (a) => {
//     //sentencias
//     return a + b
// }

// const suma () => {
//     //sentencias
//     return a + b
// }


// const strReversed = ( str ) => {
//     let strReversed = ''
//     for (i = str.length -1 ; i >= 0; i--){
//         strReversed += str[i]
//     }
//     return strReversed
// }

// console.log( strReversed('Hola'))


/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */

// const grados = (a) => {
//     let temperatura = parseInt(prompt('Digita la temperatura actual'))
//     let fah = temperatura * 9 / 5 + 32
//     return fah

// } 
//  console.log(grados(30))

/**
 * Funcion que imprima las tablas del 1 al 10
 */
// control de tabla 1x5

// const tabla = () => { 
   
// for(i= 1; i<= 10; i++){
//     for(j= 1; j<= 10; j++){
//        console.log(`${i} x ${j} = ${ i * j}`)
//     }   
// }
// }


// Arrow fuunction
// Pedir al usuario una cadena de texto
// Verificar si esa oracion es un palindromo
// isPalindrome('hola') -> No es un palindromo
// isPalindrome('oso') -> SI es un palindromo

// anita lava la tina
// oso
// seres

// funcion de retorno
//const isPalindrome = ( str ) => {
    // sentencias
    
//}

// solución 1
const isPalindrome = () => {
    let oration = prompt("Ingresa una oración")
    let reversed = ''
    for (i = oration.length -1; i-- >= 0; i-- ){
        reversed += oration[i]
    }
    if (oration === reversed){
        console.log('si es un palindromo')
    } else{
        console.log('no es un palindromo')
    }

}

// solución 2
// const isPalindrome = () => {
   
//     let reversed = ''
//     for (i = oration.length -1; i >= 0; i-- ){
//         reversed += oration[i]
//     }
//     if (oration === reversed){
//         console.log('si es un palindromo')
//     } else{
//         console.log('no es un palindromo')
//     }

//     let oration = prompt("Ingresa una oración")
// }
