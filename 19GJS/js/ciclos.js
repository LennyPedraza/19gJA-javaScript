// ciclos

/*
for(inicio; fin ; aumento/decremento){
    //sentenees
} 

    while(){sentenees}

*/

// for(let i = 1; i <= 10; i++ ) {
//     console.log(i)
// }


// 'hola koders'
// '01234567891'
// '12345678901'


// console.log(fin)
// // console.log(str[0])

// for(let i = 0; i < fin; i++){
//     console.log(str[i])
// } 

// // "Hola Koder"
// // Imprimir en consola cada una de las vocales
// // ciclos y condicionales
// // 
// // o
// // a
// // o
// e


let str = 'Hola Koders!'
let fin = str.length
// for(let i = 0; i < fin; i++){
//     let caracter = str[i]
//     // console.log(caracter)
//     if(
//         caracter == 'a' || 
//         caracter == 'e' || 
//         caracter == 'i' || 
//         caracter == 'o' || 
//         caracter == 'u'
//     ){
//         console.log(caracter)
//     }
// } 


// "Hola Koder"
// Imprimir en consola cada una de las consonantes
// ciclos y condicionales

for(let i = 0; i < fin; i++){
    let caracter = str[i]
    // console.log(caracter)
    if(
        caracter !== 'a' & 
        caracter !== 'e' & 
        caracter !== 'i' & 
        caracter !== 'o' & 
        caracter !== 'u' &
        caracter !== ' '
    ){
        console.log(caracter)
    }
} 

