
const printPosts = (arrObjs) => {
    let template = arrObjs.reduce((acc, post) => {
        return acc += `
        <div class="card col-3 m-2">
        <img src="${post.}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${post.id}</small>
        </div>
      </div>
        `
    }, '')
    document.querySelector('.card-container').innerHTML = template
}

//formar request(crear petición)
//esperar respuesta
//recibir response
//procesar el response

// Create an XMLHttpRequest object
const primerPeticion = new XMLHttpRequest()
// Define a callback function 
primerPeticion.onload = (response) => {
    // Here you can use the Data
    // console.log('REspuesta lista')
    // console.log(response.target)
    if(response.target.status >= 200 && response.target.status <= 299) {
        // la respuesta fue satisfactoria
        // console.log( response.target.responseText )
       let posts = JSON.parse(response.target.responseText)
        printPosts(posts)
    }
}
// Send a request
// GET, POST, DELETE, PATCH, PUT
primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/posts", false)
// console.log(primerPeticion)
primerPeticion.send()
// console.log(primerPeticion)