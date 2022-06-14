//url

//window.location.search
//?koderkey=-djsfjfpdsgkgd´s"

let idkoder = window.location.search.substring(10)


// 1.- hacer una petición al server

const xhttp = new XMLHttpRequest()
xhttp.open( 'GET', `https://koders19gjs-default-rtdb.firebaseio.com/koders/.json`, true)
xhttp.onload = function(data) {
    if(data.target.status >= 200 && data.target.status <= 399){
        let response = JSON.parse(data.target.response)
        // bloque de codigo

        let template = ''

            let {name, age, biography, bootcamp} = koders[key]
            console.log(koders[key])
            template += `
            <div class="col-12 col-sm-6">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name} ${age}</h5>
                <p class="card-text">${biography.slice(0,20)}</p>
                <p class="card-text">${bootcamp}</p>
                <a href="/interior.html?koderkey=${key}" class="btn btn-link">ver koder</a>
            </div>
            </div>
             </div>`

        console.log('imprimir todos los koders')

        document.querySelector('.wrap__Koder').innerHTML = template
    }
}

// cuando el response este listo
//pintar la información del koder en un card

