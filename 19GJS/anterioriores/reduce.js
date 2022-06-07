// let numeros = [1,2,3,4,5,6,7,8,9]
// let acumulador = 0

// numeros.forEach((numero)=> {
//     acumulador = acumulador + numero
    
// });
// console.log(acumulador)

//.map(call back)
//.foreach(callback)
//.filter(callback)

// let numeros =[1,2,3]
// let total = numeros.reduce((totalAcumulador,cv,index,arr)=> {
//     console.log(index,totalAcumulador,cv)
//     return acc +cv
// },0 /* si quiero que me regrese un numero inciar con un numero ejemplo cero si quiero concatenar strin en vez de 0 ''*/)
// console.log(totalSuma)

// let frutas = ['naranja','naranja']

// let vaso = frutas.reduce((recipiente,fruta,index,arr) =>{
//     return recipiente + fruta
// },'' )

// console.log(vaso)

let  nombres  = ['Ernesto','Abraham','Rodrigo','Breez','Lenny']

const iniciales = (arr) => {
    let inicial = arr.reduce( (recipiente,nombre,index,arr)=>{
        return recipiente + nombre.charAt(0) 
       
    },'')

    return inicial
}

console.log(iniciales(nombres))




const getDoubleNumbers = (arr) => {
    
}