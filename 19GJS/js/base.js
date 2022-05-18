console.log('hola koders')

//pedir valores al usuario
//prompt(mensaje, valorDelMensajePorDefecto)

let nombreKoder = prompt('Dame tu nombre ','Jorge')

if (nombreKoder === null){console.log(
    nombreKoder)} else {console.log ('Nombre vacio')}

    let ageKoder = prompt('Dame tu edad',30)
    console.log(ageKoder)
let newAgeKoder = parseInt(ageKoder)
console.log(newAgeKoder)

//pedir al usuario los grados celsius en su localidad 
//convertir  c to f


let gradosCelsius = prompt ('Digita los grados celsius que se encuentra en tu localidad')

let gradosF = gradosCelsius *9/5 + 32