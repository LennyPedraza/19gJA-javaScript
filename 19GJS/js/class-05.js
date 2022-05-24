// funciones

// let strUser = prompt('Dame una palabra', 'str').toLowerCase()
// let strReversed =''

// for (i= strUser.length -1; i>=0;i--){
//     strReversed += strUser[i]
    
// }
// console.log(strReversed)


// function reversedStr ()
// {
//     //sentencias
//     console.log('mi primer funcion')
//     console.log('mi primer funcion')
//     console.log('mi primer funcion')
//     console.log('mi primer funcion')
// }

function invertStr () {
    let strUser = prompt('dame una palabra','str').toLocaleLowerCase()
    let strReversed = ''
    for (i = strUser.length -1; i>= 0; i--){
        strReversed += strUser[i]
    }
    console.log(strReversed)
}