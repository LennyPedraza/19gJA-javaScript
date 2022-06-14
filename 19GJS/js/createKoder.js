//1. Cambiar url de firebase por mi url
const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( method, `https://koderslist-default-rtdb.firebaseio.com${url}`, true)
    xhttp.onload = function(data) {
        if(data.target.status >= 200 && data.target.status <= 399){
            let response = JSON.parse(data.target.response)
            callback(response)
        }
    }
    if(method === 'GET' || method === 'DELETE'){
        xhttp.send()
    } else {
      xhttp.send( JSON.stringify(obj) )
    }
  }

// Create Koder

//2.- Declarar funsion solo para Obtener valores de los inputs y crear estrcutura que se mandara a la B.D
const koderCreated = (resp) => {
    // { 
    //     name:'-id' 
    // }
    if(resp.name !== ''){
        document.querySelector('#wrap__alert').classList.remove('d-none')
        document.querySelector('#id__post').innerHTML = resp.name

        // timer
        setTimeout( () => {
            document.querySelector('#wrap__alert').classList.add('d-none')
            document.querySelector('#id__post').innerHTML = ''
        }, 4000)
        
        // clear form
        document.querySelector('#name').value = ''
        document.querySelector('#age').value = ''
        document.querySelector('#bootcamp').value = ''
        document.querySelector('#biography').value = ''
       
    }
}

let btnEnviar = document.querySelector('#create__koder')
btnEnviar.addEventListener('click',  () => {
    
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let bootcamp = document.querySelector('#bootcamp').value
    let biography = document.querySelector('#biography').value


    if( name !== '' && age !== '' && bootcamp !== '' && biography !== '' ){

        let newKoder = {
            name: name,
            age: age,
            bootcamp: bootcamp,
            biography: biography
        }

        console.log(newKoder)
        
        ajaxXHR(koderCreated, '/.json', 'POST', newKoder)

    } else {
        alert('Algunos datos estan vacios')
    }
})



console.log('SU codigo para crear un koder aquí')