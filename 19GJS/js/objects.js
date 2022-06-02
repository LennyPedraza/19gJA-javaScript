/**
 * Objetos
 */

let koder ={
    name:'Lenny',
    generation: '19',
    bootcamp: 'Js',
    horario: '7-10',
    Genero: 'f',
    Edad:'26',
    isActive: true ,
    modules: {
        js:true,
        maquetado: true,
        backend: false,
        react: false
    }
}

console.log(koder)


// formas de acceder a un valor

// let generation = koder.generation
// let backendPassed = koder.modules.backend
// let backendPassed = koder['modules'].backend
let backendPassed = koder['modules']['backend']

// console.log(generation,backendPassed)
//Diferente de null ,undefined, NaN => true

// if(backendPassed){
//     console.log('su paso el modulo de backend')
// }

if( backendPassed ){
    console.log(`${koder.name} Si paso el modulo de backend y tiene
    El horario ${koder.horario[0]}`)
}

koder.isActive ?  'activo' : 'no esta activo'


console.log(`
    Hola mi nombe es ${koder.name}, tengo ${koder.Edad} actualmente estoy ${koder.isActive ?  'inscrita en Kodemia' : 'no esta activo'} en la generación ${koder.generation} en un horario de ${koder.horario} y e cursado ${ koder.modules['js'] ? 'js':''}
`)



// Creando nuevas propiedades 
 let car = {}
 car.model = 'jetta'
//  car['model'] = 'jetta'

 console.log(car)





 let koder1 ={}

//   koder1.nombre = 'Lenny'
//   koder1.edad = '26'
//   koder1.isActive = true
//   koder1.modules = {}
// //nested objects
//  koder1.modules.js = true
//  koder1.modules.maquetado= true
//  koder1.modules.react = false


 //Usando backet notation
 //se recomienda cuando una variable se quiere usar -
 // last-name incorrecto marcara error por que - es un operador 
//  ['last-name'] correcto

   koder1['nombre'] = 'Lenny'
  koder1['edad'] = '26'
  koder1['isActive'] = true
  koder1['modules'] = {}
//nested objects
 koder1['modules']['js'] = true
 koder1['modules']['maquetado']= true
 koder1['modules']['react'] = false

 console.log(koder1)

 let salarios = {
     'jorge' :'20000',
     'lenny' :'30000',
     'kike':'25000',
     'Ernesto':'50000'
 }

//Iterando Objetos
//bucles -ciclos

for (elemento in salarios){
    // console.log(elemto)
    // console.log(salarios[key])

    let key = elemento
    let val = salarios [elemento]
    console.log(key,val)
}





