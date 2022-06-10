const printPhotos = (arrObjs) =>{
    let template = arrObjs.reduce((acc,photo)=>{
        return acc += `
        <div class="card" style="width: 18rem;">
        <img src="${photo.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${photo.title}</p>
        </div>
      </div>
        `
    },'')
    document.querySelector('.container-photos').innerHTML=template
}

// peticion de data

const dataPhotos = new XMLHttpRequest ()

console.log(dataPhotos)

dataPhotos.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 299) {
       let photos = JSON.parse(response.target.responseText)
        printPhotos(photos)
    }
}

// Send a request
// GET, POST, DELETE, PATCH, PUT
dataPhotos.open("GET", "https://jsonplaceholder.typicode.com/photos", false)
// console.log(primerPeticion)
dataPhotos.send()

console.log(dataPhotos)