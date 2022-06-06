/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */

   let listMenu = document.createElement('ul')
    console.log(listMenu)
    

    const itemMenu = ['Home','Products','About Us'].forEach((cv)=>{
        let list = document.createElement('li')
        list.textContent = `${cv}`
        listMenu.appendChild(list)
        list.setAttribute('class','item__menu')
    })

    document.querySelector('body').appendChild(listMenu)


/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
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
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]


/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
 */

let listName= document.createElement('ul')
listName.setAttribute('class','Koder')

console.log(listName)

const koderName =[]

koders.forEach((cv)=>{ 
     koderName.push(cv.name)
    })

const itemKoderName =  koderName.forEach((cv)=>{
    let list2 = document.createElement('li')
        list2.textContent = `${cv}`
        listName.appendChild(list2)
        list2.setAttribute('class','item__Koder')

})

document.querySelector('body').appendChild(listName)
/**
 * Opcional
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */

 let tbody = document.querySelector('tbody')
 koders.forEach( (koder, index, arr) => {
 
     let tr = document.createElement('tr')
     let tdName = document.createElement('td')
     tdName.textContent = koder.name
     tr.appendChild(tdName)
     let tdAge = document.createElement('td')
     tdAge.textContent = koder.age
     tr.appendChild(tdAge)
     let tdGen = document.createElement('td')
     tdGen.textContent = koder.generation
     tr.appendChild(tdGen)
     console.log(tr)
     tbody.appendChild(tr)
     
 })
 