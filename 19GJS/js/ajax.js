
//GET
//Verbos http
//payload

//CREATE  POST
//Read  GET
//Update PATCH - PUT
//Delete DELETE

// const createUser = (objUser) =>{
//     console.log(objUser)
//     const xhttp = new XMLHttpRequest()
//     console.log(xhttp)
//     xhttp.open("POST","",true)
//     xhttp.onload= function (data){
//         if(data.target.statis >= 200 && data.target.status <= 399)
//         {
//             console.log(data)
//         }
//   }
// //JSON.parse(str) -> ob
// //JSON.string(obj) -> texto

//     xhttp.send(JSON.stringify)
// }

// let user = {
//     name:'Jorge Luis',
//     lastName :'Camarillo',
//     age:31
// }

// createUser(user)

// let text =JSON.stringify(objeto)  para convertir un objeto a texto

// JSON.parse(texto)  para convertir un texto plano a objeto
// const createUser =  ( objUser ) => {
//     console.log(JSON.stringify(objUser))
//     const xhttp = new XMLHttpRequest()
//     xhttp.open( "POST",  
//       "https://koders19gjs-default-rtdb.firebaseio.com/users/.json", true)
//     xhttp.onload = function(data) {
//       console.log(data)
//         if(data.target.status >= 200 && data.target.status <= 399){
//             console.log(data.target.response)
//         }
//     }
//     xhttp.send( JSON.stringify(objUser) )
//   }
  

//   createUser(user)

const createUser =  ( objUser ) => {
        console.log(JSON.stringify(objUser))
        const xhttp = new XMLHttpRequest()
        xhttp.open( "POST",  
          "https://lennyfirebase-93904-default-rtdb.firebaseio.com/.json", true)
        xhttp.onload = function(data) {
          console.log(data)
            if(data.target.status >= 200 && data.target.status <= 399){
                console.log(data.target.response)
            }
        }
        xhttp.send( JSON.stringify(objUser) )
      }
      
  let user =  [{
        name: 'Lenny Innel',
        lastName: 'Cocom',
        age: 26
      },
      {
        name: 'Luis',
        lastName: 'Perez',
        age: 26
      },
      {
        name: 'Jorge',
        lastName: 'Sanchez',
        age: 29
      },
      {
        name: 'Brenda',
        lastName: 'Gutierrez',
        age: 37
      },
      {
        name: 'Claudia',
        lastName: 'Quiroz',
        age: 44
      },
      {
        name: 'Mariana',
        lastName: 'Rodriguez',
        age: 18
      },
      {
        name: 'Lorena',
        lastName: 'Martinez',
        age: 25
      },
      {
        name: 'Jaime',
        lastName: 'Cocom',
        age: 59
      },
      {
        name: 'Jorge',
        lastName: 'Camarillo',
        age: 72
      },
      {
        name: 'Veronia',
        lastName: 'Camarillo',
        age: 36
      },
      {
        name: 'Juan',
        lastName: 'Salinas',
        age: 43
      }
    ]
 
    // user.forEach((user)=>{
    //     createUser(user)
    // })
  

    // const deleteUser  = ( idUser ) => {
    //     const deletexhr = new XMLHttpRequest()
    //     deletexhr.open(
    //       'DELETE', 
    //       `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
    //       true
    //     )
    //     deletexhr.onload = (response) => {
    //       if(response.target.status >= 200 && response.target.status <= 399){
    //         console.log(response.target)
    //         console.log(response.target.response)
    //       }
    //     }
    //     deletexhr.send()
    //   }
      
    //   deleteUser('-N4AGluLtPc1l2_3tKTS')