// object -> array
// let newArray = []
// let newArray = [1,2,4]
// let newArray = ['str', str2]
// let newArray = [ [9,2,3], [1,2]]
// let newArray = [ { a:2 } ]



// let newArray =[1,2,3,'str',[1,2]]

// console.log(newArray)
//.length -> tamaño del array -> cantidad de elementos que contienen

// console.log(newArray[3])

// console.log(newArray[4][1])

// for (i=0; i<newArray.length; i++){
//     console.log(newArray[i])

// }


// let arrayToReverse =[1,2,3]
// let arrayToReversed
// for(i = arrayToReverse.length -1; i => 0; i--){
//     arrayToReverse.push(arrayToReverse[i])
// }

// let newArray = [ 1, 2, 3, 'str', [1,2] ]
// console.log(newArray)
// .length -> tamaño del array -> cantidad de elementos que contiene
// 
// console.log( newArray[0] )
// console.log( newArray[1] )
// console.log( newArray[4][1] )

// for(i = 0; i < newArray.length ; i++ ){
//     console.log(newArray[i])
// }
// let arrayToReverse = [1,2,3]
// -> [1,2,3] -> [3,2,1]
// let arrReversed = []
// for( i = arrayToReverse.length - 1; i >= 0; i-- ){
//     arrReversed.push( arrayToReverse[i] )
// }

// console.log(arrayToReverse, arrReversed)

// arrReversed.push(3)
// arrReversed.push(3)
// arrReversed[0] = 10
// console.log(arrReversed)
// arrReversed[5] = 100
// console.log(arrReversed)
// arrReversed[ arrReversed.length ] = 1000
// console.log(arrReversed)



// metodos de array
// arr.push(item)
// .push() -> agregar nuevo item al array al final
// .pop() -> Elimina nuevo item al array


// forEach()

// let arr = [1,2,3,4]
// for (i=0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((cv,index,arr) => {

//     console.log(cv)
// })



/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitaslizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 * 
 */



//  const capitalize =ciudades.toLowerCase()
//  console.log(capitalize)

const str = ['méxicO', 'RIo', 'Los AngelEs']

const capitalize = (str) => {
    let arr = []

    str.forEach(element => {

        const lower = element.toLowerCase();
        let strCap = element.charAt(0).toUpperCase() + lower.slice(1);
        arr.push(strCap)

    });
    return arr

}
capitalize(str)


let arrStr = ['hola','mundo']
/**
 * Funcion
 * getFirstLast(['hola','mundo'])
 * -> ['ha','mo']
 * .map()
 */
let result = arrStr.map((str,index,cn) =>{
    return arrStr.charAt[0] // name.[0] name.slice[0]
    
} )





 

