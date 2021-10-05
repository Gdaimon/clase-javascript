// Operadores
// Aritmeticos +, -, /, *, %

// Incremento y decremento
// pre ++numero, --numero 
// post numero++, numero--

// De comparacion
// < > >= <= != !

// Para los primitivos
// == y ===

// === Igualdad estricta
// console.log(5 === 5); // true
// console.log('Hola Mundo' === 'Hola Mundo'); // true

// console.log(7 === '7'); // false
// console.log('perro'==='gato'); //false
// console.log(false === 0); // false

// == igualdad flexible o igualdad debil
// console.log(5 == 5); // true
// console.log('Hola Mundo' == 'Hola Mundo'); // true

console.log(7 !== '7'); // true
console.log(7 != '7'); // false
console.log(7 == '7'); // true
// console.log(false == 0); // true

// Reglas

// 1. falsy values -> true
// console.log(false == 0); // true
// console.log("" == 0); // true
// console.log("         " == 0); // true
// console.log(false == ""); // true

// 2. null, undefined -> true
// console.log(null == undefined); // true
// console.log(null == null); // true
// console.log(undefined == undefined); // true

// NaN -> false (Not at Number) -> false
// console.log(NaN == null);
// console.log(NaN == undefined);
// console.log(NaN == NaN);


// function nombreMayusculas (nombre){
//     console.log(nombre);
//     if(!nombre){
//         console.error('Debe enviar el nombre')
//         return
//     }
//     return nombre.toUpperCase()
// }