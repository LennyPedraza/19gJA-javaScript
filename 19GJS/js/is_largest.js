// Pedir al usuario que ingrese 3 números
// Imprimir en consola el mayor
// opcional usar alert()

let num_1 = prompt ('Digita el primer numero')
let num_2 = prompt ('Digita un segundo numero')
let num_3 = prompt ('Digita un tercer numero')

if ( num_1 >= num_2 && num_1 >= num_3 ) {
    console.log ('el numero mayor es', num_1)
    }else if ( num_2 >= num_1 && num_2 >= num_3) 
    {console.log('el numero mayor es', num_2) }
    else {console.log('el numero mayor es ',num_3)}