const printComments = (arrObjs) => {
    let template = arrObjs.reduce((acc,comment)=>{
        return acc += `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${comment.name}</h5>
        <p class="card-text">${comment.body}</p>
        <p class="card-text"><small class="text-muted">${comment.email}</small></p>
      </div>
    </div>
  </div>
</div>`
    },'')
    document.querySelector('.container-post').innerHTML = template
}

const peticion = new XMLHttpRequest()
peticion.onload = (response) => {
    if (response.target.status >= 200 && response.target. status <= 299) {
        let comments = JSON.parse(response.target.responseText)
        printComments(comments)
    }
}
peticion.open("GET","https://jsonplaceholder.typicode.com/comments",false)
peticion.send()