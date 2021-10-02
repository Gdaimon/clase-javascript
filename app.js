// Arreglo

const sumar =(a,b) => a+b

let arreglo = [12,2,4,6,7]
// let arreglo = [12,2,4,6,7, true, {nombre: 'pedro'}, sumar]

// const arregloDos = new Array()
// const arregloTres = new Array(10)
// const arregloCuatro = []

// console.log(arregloDos);
// console.log(arregloTres);
// console.log(arreglo);

// Adicionar elementos en la ultima posicion
// console.log('Arreglo Inicial: ', arreglo);
// arreglo.push(100)
// console.log('Arreglo Final: ', arreglo);

// Adicionar  elementos al inicio del arreglo
// console.log('Arreglo Inicial: ', arreglo);
// arreglo.unshift(100)
// console.log('Arreglo Final: ', arreglo);

// Remover  elementos - extraccion
// console.log('Arreglo Inicial: ', arreglo);
// const eliminado = arreglo.pop()
// console.log('Arreglo Final: ', arreglo);
// console.log(eliminado);

// Obtener primer elemento del arreglo - extraccion
// console.log('Arreglo Inicial: ', arreglo);
// const elemento = arreglo.shift()
// console.log(elemento);
// console.log('Arreglo Final: ', arreglo);

// Asignacion por referencias
// const arregloUno = [1,2,3,4]
// const arregloDos = arregloUno
// console.log('Arreglo Uno', arregloUno)
// console.log('Arreglo Dos', arregloDos)
// arregloUno.push(50)
// console.log('Arreglo Uno', arregloUno)
// console.log('Arreglo Dos', arregloDos)

// Operador Spread
// const arregloUno = [1,2,3,4]
// const arregloDos = [...arregloUno]
// console.log('Arreglo Uno', arregloUno)
// console.log('Arreglo Dos', arregloDos)
// arregloUno.push(50)
// console.log('Arreglo Uno', arregloUno)
// console.log('Arreglo Dos', arregloDos)

// Propiedades

// Tamaño
// console.log(arreglo.length);

// Contenido arreglo
// console.log(arreglo[1]);

// Invertir arreglo
// console.log(arreglo);
// console.log(arreglo.reverse());

// Ordenamiento
const arregloColores = ['Verde', 'Azul', 'Cafe', 'Rojo']
// console.log(arregloColores.sort());
// const arregloNumeros = [3,8,2,4,1,0,10,5]
// no me organiza los numericos correctamente
// console.log(arregloNumeros.sort()); 

// Ordenamiento numeros
//(a, b)
// a => es menor que b return -1
// a => es mayor que b return 1
// a => es igual que b return 0

// Forma Uno
// const nuevoArreglo = arregloNumeros.sort(function (a, b){
//     return a - b
// })
// const nuevoArreglo = arregloNumeros.sort(function (a, b){
//     return  b-a
// })

// Forma Dos
// const nuevoArreglo = arregloNumeros.sort(ordenamiento)
// function ordenamiento (a, b){
//     return a - b
// }

// Forma Tres
// const nuevoArreglo = arregloNumeros.sort((a, b) => a - b)

// console.log(arregloNumeros);
// console.log(nuevoArreglo);


const arregloNumeros = [3,8,2,4,1,0,10,5]

// Forma Uno
// for(let indice=0; indice<= arregloNumeros.length; indice++ ){
//     console.log(arregloNumeros[indice]);
// }

// Forma Dos
// for(let numero of arregloNumeros){
//     console.log(numero);
// }

// Forma Tres
const arregloFn = arregloNumeros.forEach(function(numero, index, array){
    // console.log(numero);
    // console.log(index);
    // console.log(array);
    return numero
})

// console.log(arregloFn);


// Tranformacion de datos
// const arregloFinal = arregloNumeros.map(function (a) {
//     // console.log(a);
//     return `Numero : ${a * 2}`
// }
// )

// Forma dos
// const arregloFinal = arregloNumeros.map((a) =>`Numero : ${a * 2}`)

const transformacion = (a) =>`Numero : ${a * 2}`
// Forma Tres
const arregloFinal = arregloNumeros.map(transformacion)


console.log(arregloNumeros);
console.log(arregloFinal);
