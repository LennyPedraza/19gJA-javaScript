
// // let counter = 1
// // while(counter <= 10) {
// //     console.log(` 5 x ${counter} = ${ 5 * counter } `)
// //     counter++
// // }

// // // imprimir cada caracter de un string -> pasar a while
//  let str = 'Hola Koder'
//  let fin = str.length-1
//  let counter = 0

// // for(let i = 0; i < fin; i++){
// //     console.log(str[i])
// // } 

// while(counter <= fin ){
//     console.log(str[counter])

//     counter++
// }





// /**
//  * 
//  * Imprimir el string invertido
//  * 
//  */ 


// /**
//  * 
//  * Imprimir en consola cada una de las vocales
//  * 
//  */ 



// /**
//  * 
//  * Imprimir en consola cada una de las consonantes
//  * 
//  */ 


// /**
//  * 
//  * Imprimir el string invertido
//  * 
//  */ 

let str = 'Hola Koders'
let size=str.length
let aux =''

// do{
//     aux+=str[counter2]
//     counter2--
// }
// while(counter2 >= 0)
// console.log(aux)

//  * Imprimir en consola cada una de las vocales
// let counter2 = 0
// do{ 
//     if (
//           str[counter2]==='a'
//         ||str[counter2]==='e'
//         ||str[counter2]==='i'
//         ||str[counter2]==='o'
//         ||str[counter2]==='u'
//         )
//         {aux += str[counter2]}
//         counter2++
// } 
// while( counter2 < size)

// console.log(aux)

// /**
//  * 
//  * Imprimir en consola cada una de las consonantes
//  * 
//  */ 
let counter2 = 0
do{ 
    if (
          !(str[counter2]==='a'
        ||str[counter2]==='e'
        ||str[counter2]==='i'
        ||str[counter2]==='o'
        ||str[counter2]==='u'
        ))
        {aux += str[counter2]}
        counter2++
} 
while( counter2 < size)

console.log(aux)

