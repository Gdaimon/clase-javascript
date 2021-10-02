// Numericos
let numero1 = 50
let numero2 = 20
let numero3 = -5

let resultado;
// suma
resultado = numero1 + numero2
// Resta
resultado = numero1 - numero2
// Multiplicacion
resultado = numero1 * numero2
// Dicvison
resultado = numero1 / numero2
// Modulo
resultado = numero1 % numero2
// API MATH
resultado = Math.PI
// Redondear
resultado = Math.round(2.4)
// Truncar
resultado = Math.trunc(2.6)
// valor absoluto
resultado = Math.abs(numero3)

// Incrementos
resultado++
++resultado
// decrementos
resultado--
--resultado
// console.log(resultado);
// Asignacion
resultado +=5
resultado -=5
resultado *=5
resultado /=5

// Convertir a numero
const numeroUno = '1'
const numeroDos = 5

console.log(numeroUno)
// console.log(typeof numeroUno)
// console.log(typeof (numeroUno * 1))
console.log(typeof +numeroUno)
// console.log(numeroUno *1)
// console.log(typeof Number.parseInt(numeroUno))
console.log(typeof numeroDos)

console.log(numeroUno * numeroDos)

// Truthy y Falsy
// Falsy: null, false, 0, undefined, NaN, '', ""

let carro;

// console.log(carro);
// if(carro){
//     console.log('Valor Truthy')
// }else{
//     console.log('Valor Falsy')
// }

let nombreAnimal = 'Gato';
// console.log(nombreAnimal);
// Operador cortocircuito o OR ||
let operadorOr;
// operadorOr = true || true
// operadorOr = false || 25
// operadorOr = '' || 25
operadorOr = nombreAnimal || 'Perro'
// (variable = izquierda || derecha)
// variable = (si el valor es truthy no evalua la parte derecha y asiga el valor de la izquierda)
// variable = (si el valor es Falsy asignar el valor de la derecha)
// console.log(operadorOr);

function sumar(numeroA, numeroB ){
    console.log(numeroB);
    console.log(numeroA + (numeroB || 0))
}

// sumar(2, null)

// Falsy: null, false, 0, undefined, NaN, '', ""
// Operador Nullish coalecing ??
// evalua unicamente los valores null o undefined
const valorNull = null;
const textoVacio = '';
const algunNumero = undefined;

const valorUno = valorNull ?? 'valor por defecto Uno';
const valorDos = textoVacio ?? 'valor por defecto Dos';
const valorTres = algunNumero ?? 12;

// console.log(valorUno)
// console.log(valorDos)
// console.log(valorTres)

// Optional chaining ó elvis operator ?
const persona = {
    nombre: 'Pedro',
    apellido: 'Picapiedra'
}

// acceder a una propiedad
const nombre = persona.nombre
// console.log(nombre);

// const pais = persona?.direccion?.pais;
const pais = persona?.['direccion']?.['pais'];
// console.log(pais)

const personas = [
    persona
]

// console.log(personas[1]?.nombre);

// Asignacion Logica
// Asignacion && asignacion solo con valore Truthy

// let codigo = 20;
// let nuevoCodigo = 50
// codigo &&=nuevoCodigo
// console.log(codigo);

// Asigancion || asignacion solo con valore Falsy
let codigo = undefined;
let nuevoCodigo = 50
codigo ||=nuevoCodigo
console.log(codigo);

// Separadores numericos
// const numeroGrande = 1000000000
const numeroGrande = 1_000_000_000

console.log(numeroGrande)