const printPosts = (arrObj) => {
    let template = arrObj.redude((acc,post)=>{
        return acc +=`
        div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">
                  ${post.body}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                  ${post.date}</small>
                </div>
              </div>
            </div>
        </div>
        `
    },'')
    document.querySelector('.posts').innerHTML = template
}

const primerPeticion = new XMLHttpRequest()

primerPeticion.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 299) {
       let post = JSON.parse(response.target.responseText)
        printPosts(post)
    }
}

// primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/posts", false)
primerPeticion.send()