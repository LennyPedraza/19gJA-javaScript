
    const xhttp = new XMLHttpRequest()
    xhttp.open( 'GET', `https://koders19gjs-default-rtdb.firebaseio.com/koders/.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status >= 200 && data.target.status <= 399){
            let response = JSON.parse(data.target.response)
            // bloque de codigo
            // console.log(response)
            // console.log('Formar el layout')
            let template = ''
            for (key in koders){
                // console.log(key)
                // let llave =key
                // let dataKoder = koders[llave]
                // console.log(dataKoder)

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

            }
            console.log('imprimir todos los koders')

            document.querySelector('.all__posts').innerHTML = template
        }
    }
    xhttp.send()

  //for in