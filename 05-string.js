// Manipulacion String

// const texto = "Hola Mundo"
// const texto = 'Hola Mundo'
// console.log(texto);

// Concatenacion
// const nombre = 'Pedro'
// const apellido = 'Picapiedra'
// const nombreCompleto = nombre + ' ' + apellido
// console.log(nombreCompleto);

// Template String
const nombre = 'Pedro'
const apellido = 'Picapiedra'
const nombreCompleto = `${nombre} ${apellido}`
// console.log(nombreCompleto);

// console.log(`${ 1+1 }`)

function saludar(nombre){
    return `Hola: ${nombre}`
}

// console.log(`${saludar(nombreCompleto)}, bienvenido...!`)

const numeroUno =2
const numeroDos =3
// console.log(`${numeroUno + numeroDos}`);


const texto = 'Hola Mundo Hola, como estas Mundo'
// Tamaño String
// console.log(texto.length)
// Remplazar
// console.log(texto.replace('Hola', 'Adios'))
// Remplazar todas las coincidencias
// console.log(texto.replaceAll('Hola', 'Adios'))
// Separar -> arreglo
// console.log(texto.split(' '))
// console.log(texto.split(''))

// Chaining
// console.log(texto);
// let resultadoReemplazo = texto.replaceAll('Hola', 'Adios')
// resultadoReemplazo = texto.replaceAll('Mundo', 'Planeta')
// let resultadoReemplazo = texto.replaceAll('Hola', 'Adios')
//                               .replaceAll('Mundo', 'Planeta')
//                               .split(' ')
// console.log(resultadoReemplazo);

// Extraer
// console.log(texto.substring(4))
// console.log(texto.substring(5,10))
// console.log(texto.substring(5,-3))

// Buscar o encontrar
// console.log(texto.indexOf('estas'))
// console.log(texto.lastIndexOf('Hola'))
// console.log(texto.includes('Hola'))
// console.table(texto.split(''))
// console.log(texto.startsWith('ho'))
// console.log(texto.endsWith('ho'))

// Minusculas
console.log(texto.toLowerCase())

// Mayusculas
console.log(texto.toUpperCase())
