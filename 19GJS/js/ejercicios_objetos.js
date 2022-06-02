//iTERANDO OBJETOS//

let salarios = {
    "Jorge" : "20000",
    "lenny" : "30000",
    "Kike" : "50000",
    "Ernesto": "70000",
}

/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */

// let sumaSalario = 0
// for (elemento in salarios) {
//     let val = parseInt(salarios[elemento])
//     sumaSalario += 1

// }
// console.log(sumaSalario)


/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */

// const totalSalario = (objSalarios) =>{
//     let sumaSalario = 0
    
//     for (elemento in objSalarios) {
//         let val = parseInt(objSalarios[elemento])
//         sumaSalario += val
        
    
//     }
//     return sumaSalario
    
// }

// console.log(totalSalario(salarios))






/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( '


*/

let element = [1,2,4, "México", "Perú", "España", 3]
// let element = {key:'value'}

console.log(typeof(element))

const isAnObjectOrArray = (element) => {
    if ( typeof element === 'array'){
       console.log ('es un array')
    }
    else if (typeof element === 'object'){
        console.log('es un objeto')
    } else{
        console.log('no es ni un arra ni objeto')
    }
        return
    }

    console.log(isAnObjectOrArray(element))

// CRUD
// C -> create
let objectCar = {
    model: 'jetta',
    doors: 4,
    year: 2022,
    cilindraje: 2,
    color: 'rojo'
}
console.log(objectCar)

// R -> Read
console.log(objectCar.model)
console.log(objectCar.color)

// U -> Update
objectCar.color = 'verde'
console.log(objectCar.color)

// D -> Delete
// console.log(objectCar)
// delete objectCar.cilindraje
// console.log(objectCar)

// Crear / actualizar un objeto
// Leer propiedades de un objeto
// Como iterar propiedades de un objeto
// Eliminar propiedades de un objeto

