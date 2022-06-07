/**
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 * 
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 * 
 */

 let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]
// console.log(koders)

// koders.forEach((objetoCompleto,index,arrayObj)=>{
//     console.log(objetoCompleto.modulos[0])
// })
console.log(koders)
// const printName = (arrObj) => {
//     arrObj.forEach(object =>{ 
//         console.log(`${object.name} ${object.lastName} tiene ${object.age} y es de la generacion ${object.generation}`)
//         }   )
// }

// console.log(printName(koders))

/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 * 
 */
const sumEdades = (arrObj) =>{
    let totalSum = 0
    arrObj.forEach(object=> {
        totalSum +=object.age

    })
    return `  La suma de todas las edades es igual a ${totalSum}`
}

let totalAgeReduce  = koders.reduce((acc,cv) => {
     return acc + cv.age
    },0)

console.log(sumEdades(koders))

/**
 * Del objeto library
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 * 
 */
 let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    //1. Obtener el numero de libros que se estan leyendo

    console.log(library)

    // const allReading = (arrObj) =>{
    //     let books = 0
    //     arrObj.forEach(library=>{
    //         if (library.readingStatus === true){
    //             return books ++
    //         }else{
    //             books
    //         }
    //     })
    //     return books
    // // }
    // console.log(allReading(library))

    let totalReading = library.reduce((total,libro)=>{ 
        return libro.readingStatus ? total += 1 : total
    },0)

    console.log(totalReading)
// 2. Obtener una lista de todos los autores
let authors = library.map((cv) =>{
    return cv.author
})

console.log(authors)

//3.Obtener una lista de todos los libros
let books = library.map((book) =>{
    return book.title
})

console.log(books)