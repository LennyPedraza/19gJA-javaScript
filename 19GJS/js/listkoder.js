// const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
//   const xhttp = new XMLHttpRequest()
//   xhttp.open( method, `https://koderslist-default-rtdb.firebaseio.com${url}`, true)
//   xhttp.onload = function(data) {
//       if(data.target.status >= 200 && data.target.status <= 399){
//           let response = JSON.parse(data.target.response)
//           callback(response)
//       }
//   }
//   if(method === 'GET' || method === 'DELETE'){
//       xhttp.send()
//   } else {
//     xhttp.send( JSON.stringify(obj) )
//   }
// }

/* Estructura de cada koder
  {
    name: 'jorge',
    age: 30,
    bootcamp: 'js',
    biography: 'lorem ipsum dolot sit amet'
  }
*/
//1.- Agregar koders a la firebase (para tener objetos almacenados )

// const createKoder =  ( objKoder ) => {
//   const xhttp = new XMLHttpRequest()
//   xhttp.open( "POST",  
//     "https://koderslist-default-rtdb.firebaseio.com/.json", true)
//   xhttp.onload = function(data) {
//       if(data.target.status >= 200 && data.target.status <= 399){
//         console.log(data.target.response)
//       }
//   }
//   xhttp.send( JSON.stringify(objKoder) )
// }
// let koder =  {
//   name: 'Brenda',
//   age: 36,
//   bootcamp: 'js',
//   biography: 'lorem ipsum dolot sit amet'
// }

// createKoder(koder)
//2.- Crear cards con la base precargarda el firebase 
const printAllKoders =(allKoders) =>{
  let template = ''
  for(koders in allKoders){
    // destrucuracion de objetos
    let {name,age,bootcamp,biography} = allKoders[koders]
    template +=`
    <div class="col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">${name}</h5>
                              <p class="card-text">${age}</p>
                              <p class="card-text">${bootcamp}</p>
                              <p class="card-text">${biography}</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>
                        </div>
    `
  }
  document.querySelector('.all__koders').innerHTML = template
}

ajaxXHR(printAllKoders, `/.json`, 'GET')

// uso de la funcion 
// GET , DELETE
// ajaxXHR(nombreDeFuncionAllamar, `/koders/.json`, 'GET')
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'DELETE')

// POST, PUT, PATCH
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'POST', obj)
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PUT', obj)
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PATCH', obj)




// Listar todos los koders
console.log('SU codigo para editar un koder aquí')