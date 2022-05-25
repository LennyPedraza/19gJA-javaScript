// function ejercicio1 () {
//     let a = 0
//     for(let i = 1 ; i <= 100 ; i++){
//         if(i % 3 === 0
//             ||i % 5 === 0
//             || i % 7 === 0 )
//             {a += i }  
//     }
//     console.log(`La suma de los multiplos del 3, 5 y 7 es: ${a}`)
// }

// function ejercicio2 (){

// }

// function countLetters() {
//     let counter = 0;
//     let sentence = prompt(
//       "Indicar una oración cualquiera:",
//       "Felicidades por completar este reto."
//     );
  
//     let stringLen = sentence.length;
//     let totalA = 0,
//       totalE = 0,
//       totalSpaces = 0;
  
//     sentence = sentence.toLowerCase();
  
//     do {
//       if (sentence[counter] === "a") totalA++;
//       else if (sentence[counter] === "e") totalE++;
//       else if (sentence[counter] === " ") totalSpaces++;
  
//       counter++;
//     } while (counter < stringLen);
//     console.log(
//       `[DO-WHILE]\nA -> ${totalA}\nE -> ${totalE}\nEspacios -> ${totalSpaces}`
//     );
//   }
  
//   function sumNumbers() {
//     let number = parseInt(prompt("Indique un número entre 1 y 100", 50));
//     let result = 0;
//     let counter = 1;
  
//     while (counter <= number) {
//       result += counter;
  
//       counter++;
//     }
//     alert(`"[WHILE]La sumatoria total del 1 hasta el ${number} es ${result}"`);
//   }
  

// function nameFuction (){

//     return
// }

// funciones con parametros

// let a = 6 , b = 7
// function suma (a,b) {
//     let total =0
//     total = a + b
//     return total
// }




function sumNum (a,b,c) {
    return a + b + c
}

let a = parseInt(prompt('Digita un numero'))
let b = parseInt(prompt('Digita otro numero'))
let c = parseInt(prompt('Digita un ultimo numero'))

let total =sumNum(a,b,c)
console.log(total)