// Intervalos

// setTimeOut
// setTimeout(funcion, tiempo)
// setTimeout(function(){
//     console.log('Hola Mundo');
// }, 2000)

// Interval
// setInterval(funcion, tiempo)

let indice =0;
const intervalo = setInterval(function(){
    // console.log('Entro...!');
    // console.log('Otra vez');
    console.log(`Indice: ${indice}`);
    if(indice === 5){
        clearInterval(intervalo)
    }
    indice++
}, 1000 )

console.log(intervalo);