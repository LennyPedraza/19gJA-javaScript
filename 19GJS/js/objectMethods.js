/**
 * Metodos de Objetos
 * Object.methodName
 */

//Object.keys()

// let obj ={
//     'propiedad':'valor',
//     'key':'value'
// }

let obj ={
    'name':'obj',
    'lastName':'Camarillo'
}

//['name','lastName']

let arrKeys = []
for(propiedad in obj){
    // console.log(propiedad)
    arrKeys.push(propiedad)
}

console.log(arrKeys)

let llaves = Object.keys(obj)
console.log(llaves)

llaves.forEach((llave)=>{
    console.log(obj[llave])
})

//Object.assing()

//Object.assing(obj,obj)
let obj1= {
    name:'jorge'
}

let obj2= {
    lastName:'jorge'
}

Object.assign(obj1, obj2)

console.log(obj1)
console.log(obj2)

//Object.entries()
// -> [['key','value']]
// [['name',jorge] ['lastName','camarillo']]

let resultEntries = Object.entries(obj)
console.log(resultEntries)

//Object.values(obj)
//Regresa los valores en forma de arrary
// -> [value1,value2,....]

let resultValues = Object.values(obj)
console.log(resultValues)

//Object.freeze()
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

//Object.create
// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();


//Object.seal
// Solo puedes actualizar el objeto
let objSeal = {
'name1':'Kike',
    'lastName1': 'Acosta'
}

// Object.freeze(objSeal)
// objSeal.name1 ='Lenny'

// console.log(objSeal)

Object.seal(objSeal)
delete objSeal.lastName1

console.log(objSeal)


//Object.create()
// Object.keys()
// Object.values()
// Object.entries()

// let objEmpleado = {
//     name:'Lenny',
//     age:'30',
//     salario: 3000,
//     puesto:'Gerente',
//     idEmpleado:1000
// }

let salarios = {
    'jorge':3000,
    'mario':4000,
    'luis':5005,
}

let totalEmpleados = Object.keys(salarios)

let totalRed = Object.values(salarios).reduce((acc,salario)=>acc+salario)

let totalFinal = 0
Object.values(salarios)
.forEach((salario)=> {
    totalFinal += salario
})

let soloSalarios = Object.values(salarios)
for(i = 0 ; i < soloSalarios; i++){
    
}










