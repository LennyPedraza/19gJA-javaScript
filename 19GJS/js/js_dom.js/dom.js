// DOM
// Como seleccionar 
//1.Selecionar por ID

document.getElementById('title')
//Selecionar por tag name
document.getElementsByTagName('h1')[0]
//Selecionar por clase
document.getElementsByClassName('item')

//Selecciona elementos por tag,class, id  
//SOLO SELECCIONARA LA PRIMERA COINCIDENCIA

document.querySelector('.item') //por clase
document.querySelector('#title') //por id
document.querySelector('h1') // por tag

//Selecciona elementos por tag,class, id 
//lista de elementos 


document.querySelectorAll('.item') //por clase
document.querySelectorAll('#title') //por id
document.querySelectorAll('h1') // por tag


//2.Setear/Agrega,Obtener,comprobar atributos

//Selecionar el elemento a cambiar
let titulo = document.querySelector('.title')
titulo.setAttribute('data-id','1')


//element.getAttibute('')
let atributoP = titulo.getAttribute('data-id')
console.log(atributoP)

// comprobar si existe un atributo

titulo.hasAttribute('data-id')

//eliminar atributo
//element.removeAttribute('id')
// titulo.removeAttribute('id')
//document.querySelector('.title').removeAttribute('id')
// eliminar atributos 
// element.removeAttribute(attrName)
// document.querySelector('.title').removeAttribute('id')
// titulo.removeAttribute('id')

/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */

let lista = document.querySelector('ul')

lista.setAttribute('id','list')
lista.setAttribute('class','list')

let allLi = document.querySelectorAll('li')
allLi.forEach((cv)=>{
    cv.removeAttribute('class')
})


allLi.forEach((cv)=>{
    cv.setAttribute('')
})
